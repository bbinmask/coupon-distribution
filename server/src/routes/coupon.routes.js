import { Router } from "express";
import { claimCheck } from "../middlewares/coupon.middlewares.js";
import { claimCoupon } from "../controllers/coupon.controllers.js";

const router = Router();

router.post("/claim", claimCheck, claimCoupon);

export default router;
