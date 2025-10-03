import { nanoid } from "nanoid";
import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Users = sequelize.define(
    "users",
    {
        id: {
            type: DataTypes.STRING,
            defaultValue: () => nanoid(15),
            allowNull: false,
            primaryKey: true,
            unique: true,
        },
        login: { type: DataTypes.STRING, allowNull: false, unique: true },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        password_hash: { type: DataTypes.STRING, allowNull: false },
        role: { type: DataTypes.ENUM("user", "admin"), defaultValue: "user" },
    },
    {
        timestamps: true,
        updatedAt: false,
        createdAt: "created_at",
    }
);

export { Users };
export default sequelize;
