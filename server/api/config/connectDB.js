import { connect } from "mongoose";

const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI, {
      dbName: "coupon-distribution",
      appName: "Round Robin Coupon Distribution",
    });
    console.warn("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
