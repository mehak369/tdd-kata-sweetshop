import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_SECRET = "test-secret";

interface AuthRequest extends Request {
  userId?: string;
}

interface TokenPayload extends JwtPayload {
  userId: string;
}

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

    if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
    }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as unknown as TokenPayload;

    if (!decoded.userId) {
      return res.status(401).json({ message: "Invalid token payload" });
    }

    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
