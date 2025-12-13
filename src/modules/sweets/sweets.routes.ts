import { Router } from "express";
import { getSweets } from "./sweets.controller";
import { authMiddleware } from "../../middleware/auth.middleware";

const router = Router();

router.get("/", authMiddleware, getSweets);

export default router;
