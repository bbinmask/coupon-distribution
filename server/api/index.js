import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import limiter from "./middlewares/limiter.middlewares.js";
import couponRoutes from "./routes/coupon.routes.js";
import connectDB from "./config/connectDB.js";

dotenv.config();
connectDB();
const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use(limiter);
app.use("/api/coupons", couponRoutes);
app.get("/api/", (req, res) => {
  res.send("connected!");
});

export default app;
