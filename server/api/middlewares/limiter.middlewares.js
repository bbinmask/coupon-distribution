import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: { message: "Too many requests, please try again later." },
  headers: true,
});

export default limiter;
