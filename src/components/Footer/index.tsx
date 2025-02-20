import React from "react";
import Image from "next/image";
import { modeOfPayments, pointers } from "@/utils/constant";
import PaymentMode from "./_components/PaymentMode";
import PointersComp from "./_components/PointersComp";

const Footer = () => {
  return (
    <div className="relative p-4 mt-4 xl:mt-8 bg-orange-50 border-t">
      <PointersComp />
      <div className="text-sm w-full xl:w-max-[650px] xl:text-base mt-2 ml-2">
        <div>
          <p>Aktuelt</p>
          <p>Om Skeidar</p>
          <p>Kundeservice</p>
        </div>
      </div>
      <div className="mt-2 text-center flex flex-col space-y-3 items-center justify-center">
        <Image
          src={"/logo.png"}
          alt={"logo"}
          width={220}
          height={100}
          priority
        />
        <div className="text-xs">
          ©2024-2025 SkeidarLivingGroup AS | Org.nr. 915920020
          <span className="text-xs block">
            Personbenerkering | Bruke avi information
          </span>
        </div>
        <PaymentMode />
      </div>
    </div>
  );
};

export default Footer;
