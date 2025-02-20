import React from "react";
import Image from "next/image";
import { pointers } from "@/utils/constant";

const PointersComp = () => {
  return (
    <div className="w-full xl:space-x-12 space-x-2 flex items-center justify-center">
      {pointers.map((item) => (
        <div key={item.id} className="space-y-3">
          <div className="text-sm flex items-center justify-center bg-white rounded w-[50px] h-[20px]">
            <Image
              src={item.img}
              width={25}
              height={25}
              alt={"alt"}
              className="mt-2"
            />
          </div>
          <p className="text-[10px] xl:text-sm">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PointersComp;
