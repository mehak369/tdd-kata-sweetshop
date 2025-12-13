import { Request, Response } from "express";
import { registerUser, loginUser } from "./auth.service";

interface RegisterRequestBody {
  email: string;
  password: string;
}

export const register = async (
  req: Request<{}, {}, RegisterRequestBody>,
  res: Response
) => {
  const { email, password } = req.body;
  const user = await registerUser(email, password);
  return res.status(201).json(user);
};

export const login = async (
  req: Request<{}, {}, RegisterRequestBody>,
  res: Response
) => {
  const { email, password } = req.body;

  const token = await loginUser(email, password);

  return res.status(200).json({ token });
};
