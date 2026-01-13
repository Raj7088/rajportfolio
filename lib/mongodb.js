
import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI not found");
  }

  await mongoose.connect(process.env.MONGODB_URI);
  isConnected = true;
};
