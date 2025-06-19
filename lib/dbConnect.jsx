import mongoose from "mongoose";

export default async function Connection() {
  try {
    const URL = process.env.DB_URL + process.env.DB_NAME;
    console.log("Connecting to:", URL);
    
    const db = await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected");
    return db;
  } catch (error) {
    console.error("Database connection error:", error.message);
    throw error;
  }
}
