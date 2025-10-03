import bcrypt from "bcrypt";
import { nanoid } from "nanoid";
import jwt from "jsonwebtoken";
import { Users } from "../../models/models.js";
import ApiError from "../../error/apiError.js";
import dotenv from "dotenv";

dotenv.config(); // читаем .env

const generateJwt = (id, email, role, login, created_at) => {
    return jwt.sign(
        { id, email, role, login, created_at },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
    );
};

class UsersController {
    //--- СОЗДАНИЕ НОВОГО ПОЛЬЗОВАТЕЛЯ ---//

    async registration(req, res, next) {
        try {
            const { email, login, password } = req.body;
            if (!email || !password)
                return next(
                    ApiError.badRequest("Некорректный email или пароль!")
                );

            const existingUser = await Users.findOne({ where: { email } });
            if (existingUser)
                return next(
                    ApiError.badRequest(
                        `Пользователь с email "${email}" уже существует!`
                    )
                );

            const hashPassword = await bcrypt.hash(password, 10);
            const newUser = await Users.create({
                login,
                email,
                password_hash: hashPassword,
                role: "user",
            });

            const token = generateJwt(
                newUser.id,
                newUser.email,
                newUser.role,
                newUser.login,
                newUser.created_at
            );
            return res.json({ token });
        } catch (error) {
            return next(ApiError.internal("Ошибка регистрации!"));
        }
    }

    //--- ВХОД ПОЛЬЗОВАТЕЛЯ В СИСТЕМУ ---//

    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await Users.findOne({ where: { email } });
            if (!user)
                return next(ApiError.badRequest("Пользователь не найден!"));

            const isPasswordValid = await bcrypt.compare(
                password,
                user.password_hash
            );
            if (!isPasswordValid)
                return next(ApiError.badRequest("Неверный пароль!"));

            const token = generateJwt(
                user.id,
                user.email,
                user.role,
                user.login,
                user.created_at
            );

            return res.json({ token });
        } catch (error) {
            return next(ApiError.internal("Ошибка входа!"));
        }
    }

    //--- ПРОВЕРКА И АВТОРИЗАЦИЯ ПОЛЬЗОВАТЕЛЯ ---//

    async check(req, res, next) {
        try {
            const user = await Users.findOne({ where: { id: req.user.id } });

            if (!user) {
                return next(ApiError.unauthorized("Пользователь не найден"));
            }

            const token = generateJwt(
                user.id,
                user.email,
                user.role,
                user.login,
                user.created_at
            );

            return res.json({ token });
        } catch (err) {
            return next(ApiError.internal("Ошибка проверки пользователя"));
        }
    }

    //--- СБРОС ПАРОЛЯ ПОЛЬЗОВАТЕЛЯ ---//

    async resetPassword(req, res, next) {
        try {
            const { login, email, newPassword, confirmPassword } = req.body;

            if (!login || !email || !newPassword || !confirmPassword) {
                return next(
                    ApiError.badRequest("Все поля обязательны для заполнения")
                );
            }

            if (newPassword !== confirmPassword) {
                return next(ApiError.badRequest("Пароли не совпадают"));
            }

            const user = await Users.findOne({ where: { login, email } });
            if (!user) {
                return next(ApiError.notFound("Пользователь не найден"));
            }

            // Хешируем новый пароль
            const hashedNew = await bcrypt.hash(newPassword, 10);
            user.password_hash = hashedNew;
            await user.save();

            return res.json({ message: "Пароль успешно обновлён" });
        } catch (err) {
            return next(ApiError.internal("Ошибка при сбросе пароля"));
        }
    }

    //--- ОБНОВЛЕНИЕ ДАННЫХ ПОЛЬЗОВАТЕЛЯ ---//

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const user = await Users.findByPk(id);
            if (!user) return next(ApiError.notFound("Пользователь не найден"));

            const { login, email } = req.body;
            if (login) user.login = login;
            if (email) user.email = email;

            await user.save();
            return res.json({
                message: "Данные обновлены",
                user: { id: user.id, login: user.login, email: user.email },
            });
        } catch (err) {
            return next(
                ApiError.internal("Ошибка при обновлении пользователя")
            );
        }
    }

    //--- УДАЛЕНИЕ ПОЛЬЗОВАТЕЛЯ ---//

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const user = await Users.findByPk(id);
            if (!user) return next(ApiError.notFound("Пользователь не найден"));

            await user.destroy();
            return res.json({ message: "Пользователь удалён" });
        } catch (err) {
            return next(ApiError.internal("Ошибка при удалении пользователя"));
        }
    }
}

export default new UsersController();
