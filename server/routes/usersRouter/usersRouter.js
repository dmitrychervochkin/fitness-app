import { Router } from "express";
import usersController from "../../controllers/usersController/usersController.js";
import authMiddleware from "../../middlewares/authMiddleware.js";

const router = new Router();

router.post("/register", usersController.registration);
router.post("/login", usersController.login);

router.get("/check", authMiddleware, usersController.check);

router.patch("/reset", usersController.resetPassword);
router.patch("/:id", authMiddleware, usersController.update);

router.delete("/:id", authMiddleware, usersController.delete);

export default router;
