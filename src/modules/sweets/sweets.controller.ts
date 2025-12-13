import { Request, Response } from "express";
import { getAllSweets } from "./sweets.service";

export const getSweets = async (_req: Request, res: Response) => {
  const sweets = await getAllSweets();
  return res.status(200).json(sweets);
};
