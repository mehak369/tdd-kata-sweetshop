import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "./user.model";

const JWT_SECRET = "test-secret"; 

export const registerUser = async (email: string, password: string) => {
  const hashedPassword = bcrypt.hashSync(password, 10);

  const user = await User.create({
    email,
    password: hashedPassword
  });

  return {
    id: user._id.toString(),
    email: user.email
  };
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    { userId: user._id.toString() },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  return token;
};
