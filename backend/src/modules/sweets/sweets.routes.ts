import { Router } from "express";
import {
  getSweets,
  createSweet,
  purchase,
  restock
} from "./sweets.controller";
import { authMiddleware } from "../../middleware/auth.middleware";
import { adminMiddleware } from "../../middleware/admin.middleware";

const router = Router();

router.get("/", authMiddleware, getSweets);
router.post("/", authMiddleware, createSweet);
router.post("/:id/purchase", authMiddleware, purchase);
router.post("/:id/restock", authMiddleware, adminMiddleware, restock);

export default router;
