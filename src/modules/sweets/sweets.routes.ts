import { Router } from "express";
import { getSweets, createSweet } from "./sweets.controller";
import { authMiddleware } from "../../middleware/auth.middleware";
import { purchase } from "./sweets.controller";

const router = Router();

router.get("/", authMiddleware, getSweets);
router.post("/", authMiddleware, createSweet);
router.post("/:id/purchase", authMiddleware, purchase);

export default router;
