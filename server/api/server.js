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
    origin: "http://localhost:5173",
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

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("Server running on port ", PORT));
