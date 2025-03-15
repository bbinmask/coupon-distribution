import { Coupon } from "../models/coupon.models.js";
import { randomUUID } from "crypto";

export const claimCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findOne({ claimedBy: null });
    if (!coupon)
      return res.status(400).json({ message: "No coupons available." });

    coupon.claimedBy = req.userIp;
    coupon.claimTime = new Date();
    await coupon.save();

    res.cookie("coupon_claimed", coupon.code, {
      httpOnly: true,
      maxAge: 3600000,
    });

    res
      .status(200)
      .json({ message: `You have claimed coupon: ${coupon.code}` });
  } catch (error) {
    return res
      .status(500)
      .json({ message: error?.message || "Something went wrong!" });
  }
};
