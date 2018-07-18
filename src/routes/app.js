import { Router } from "express";
import * as AppController from "../controllers/app";

const router = Router();

router.get("/", (req, res) => AppController.home(req, res));

export default router;
