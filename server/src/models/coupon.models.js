import { Schema, model } from "mongoose";

const couponSchema = new Schema({
  code: String,
  claimedBy: { type: String, default: null },
  claimTime: Date,
});
export const Coupon = model("Coupon", couponSchema);
