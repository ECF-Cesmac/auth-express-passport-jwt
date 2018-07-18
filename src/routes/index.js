import { Router } from "express";
import appRouter from "./app";
import userRouter from "./user";
import authRouter from "./auth";

const router = new Router();

router.use("/", appRouter);
router.use("/users", userRouter);
router.use("/auth", authRouter);

export default router;
