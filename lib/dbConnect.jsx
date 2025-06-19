import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("❌ MONGODB_URI is not defined in environment variables");
}

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}


async function dbConnect() {
  try {
   
    if (cached.conn) {
      return cached.conn;
    }

    // If not connected, create connection promise
    if (!cached.promise) {
      cached.promise = mongoose.connect(uri, options).then((mongooseInstance) => {
        console.log("✅ MongoDB connected with Mongoose");
        return mongooseInstance;
      });
    }

    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    throw new Error("Failed to connect to MongoDB. Check MONGODB_URI and internet access.");
  }
}

export default dbConnect;