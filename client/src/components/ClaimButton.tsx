import { useState } from "react";
import axios from "axios";

export default function ClaimButton() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const claimCoupon = async () => {
    setIsLoading(true);

    try {
      const res = await axios.post(
        "https://coupon-distribution-adm5.vercel.app/api/coupons/claim",
        {},
        { withCredentials: true }
      );

      setMessage(res.data.message);
    } catch (error: any) {
      console.log(error);
      setMessage(error.response?.data.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <button
        onClick={claimCoupon}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg text-base w-full min-w-32"
      >
        {isLoading ? "Loading..." : "Claim Coupon"}
      </button>
      {message && <p className="mt-3 text-red-600">{message}</p>}
    </div>
  );
}
