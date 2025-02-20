import React from "react";
import Image from "next/image";
import { modeOfPayments } from "@/utils/constant";

const PaymentMode = () => {
  return (
    <div className="flex items-end justify-center gap-4">
      {modeOfPayments.map((payment) => (
        <div key={payment.id}>
          <Image src={payment.img} width={75} height={75} alt={"alt"} />
        </div>
      ))}
    </div>
  );
};

export default PaymentMode;
