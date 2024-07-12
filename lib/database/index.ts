import mongoose from "mongoose";

const mongoUri = process.env.MONGO_URI;
let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;
  if (!mongoUri) throw new Error("Database cant connect");

  cached.promise =
    cached.promise ||
    mongoose.connect(mongoUri, {
      dbName: "eventlist",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;
  return cached.conn;
};
