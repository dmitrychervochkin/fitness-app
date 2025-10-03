import { Router } from "express";
import usersRouter from "./usersRouter/usersRouter.js";

const router = new Router();

router.use("/users", usersRouter);

export default router;
