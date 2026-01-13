import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;

  const uri = process.env.MONGODB_URI;

  if (!uri) throw new Error("MongoDB URI missing");

  try {
    await mongoose.connect(uri);
    isConnected = true;
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("DB connection failed", error);
  }
};
