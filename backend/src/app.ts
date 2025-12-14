import express from "express";
import authRoutes from "./modules/auth/auth.routes";
import sweetsRoutes from "./modules/sweets/sweets.routes";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173"
}));
app.use("/api/auth", authRoutes);
app.use("/api/sweets", sweetsRoutes);
export default app;
