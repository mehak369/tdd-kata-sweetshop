import { Request, Response, NextFunction } from "express";
import { User } from "../modules/auth/user.model";

export const adminMiddleware = async (
  req: Request & { userId?: string },
  res: Response,
  next: NextFunction
) => {
  const user = await User.findById(req.userId);

  if (!user || user.role !== "admin") {
    return res.status(403).json({ message: "Forbidden" });
  }

  next();
};
