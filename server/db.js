import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // читаем .env

const sequelize = new Sequelize(
    process.env.DB_NAME, // название БД
    process.env.DB_USER, // пользователь
    process.env.DB_PASSWORD, // пароль
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "postgres",
    }
);

// Если нужно подключение через DATABASE_URL с SSL:
// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialect: "postgres",
//   protocol: "postgres",
//   logging: false,
//   dialectOptions: {
//     ssl: { require: true, rejectUnauthorized: false },
//   },
// });

export default sequelize;
