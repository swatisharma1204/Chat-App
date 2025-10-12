import mongoose from "mongoose";

export const connectDB = async () => {
  const MONGODB_URI= "mongodb://localhost:27017/ChatApp"
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
