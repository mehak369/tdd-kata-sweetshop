import mongoose from "mongoose";

export const connectDB = async () => {
  if (process.env.NODE_ENV === "test") {
    return;
  }

  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/sweet-shop");
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB not available, running without DB");
  }
};
