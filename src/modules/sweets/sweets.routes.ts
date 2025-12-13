import { Router } from "express";
import { getSweets, createSweet } from "./sweets.controller";
import { authMiddleware } from "../../middleware/auth.middleware";

const router = Router();

router.get("/", authMiddleware, getSweets);
router.post("/", authMiddleware, createSweet);

export default router;
