import jwt from "jsonwebtoken";
import ApiError from "../error/apiError.js";

export default function authMiddleware(req, res, next) {
    try {
        // Заголовок Authorization: Bearer <token>
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return next(ApiError.unauthorized("Токен не предоставлен"));
        }

        const token = authHeader.split(" ")[1]; // получаем сам токен

        if (!token) {
            return next(ApiError.unauthorized("Токен некорректен"));
        }

        // Верификация токена
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded; // кладем данные пользователя в req.user
        next();
    } catch (err) {
        return next(ApiError.unauthorized("Токен недействителен"));
    }
}
