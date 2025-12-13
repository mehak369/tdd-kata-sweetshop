import { Request, Response } from "express";
import { getAllSweets, addSweet } from "./sweets.service";
import { purchaseSweet } from "./sweets.service";

export const getSweets = async (_req: Request, res: Response) => {
  const sweets = await getAllSweets();
  return res.status(200).json(sweets);
};

export const createSweet = async (req: Request, res: Response) => {
  const { name, category, price, quantity } = req.body;

  const sweet = await addSweet(name, category, price, quantity);

  return res.status(201).json(sweet);
};
export const purchase = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Sweet id is required" });
  }

  const sweet = await purchaseSweet(id);

  return res.status(200).json(sweet);
};

