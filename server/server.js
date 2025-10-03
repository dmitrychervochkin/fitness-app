import express from "express";
import sequelize from "./models/models.js";
import router from "./routes/index.js";
import dotenv from "dotenv";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

// 🔹 Основные маршруты API
app.use("/api", router);

app.use(errorHandler);

// Server & DB
async function start() {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        console.log("✅ Database connected");

        app.listen(PORT, () => {
            console.log(`🚀 Server running at http://localhost:${PORT}`);
        });
    } catch (e) {
        console.error("❌ DB connection error:", e);
    }
}

start();
