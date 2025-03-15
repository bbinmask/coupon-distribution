import { Coupon } from "../models/coupon.models.js";

export const claimCheck = async (req, res, next) => {
  const userIp = req.ip;
  const userCookie = req.cookies.coupon_claimed;
  const existingClaim = await Coupon.findOne({
    claimedBy: userIp,
    claimTime: { $gt: new Date(Date.now() - 3600000) },
  });
  if (existingClaim) {
    const remainingTime = Math.ceil(
      (existingClaim.claimTime.getTime() + 3600000 - Date.now()) / 60000
    );
    return res
      .status(429)
      .json({ message: `You can claim again in ${remainingTime} minutes.` });
  }
  if (userCookie) {
    return res
      .status(429)
      .json({ message: "You have already claimed a coupon in this session." });
  }

  req.userIp = userIp;
  next();
};
