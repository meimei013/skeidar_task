import React from "react";
import { pointers } from "@/utils/constant";
import { Pointer } from "lucide-react";

const PointersComp = () => {
  return (
    <div className="w-full xl:space-x-12 space-x-2 flex items-center justify-between xl:justify-center">
      {pointers.map((item) => (
        <div key={item.id} className="space-y-3">
          <div className="text-sm flex items-center border-2 justify-center bg-orange-50 border-gray-400 rounded w-[50px] h-[20px]">
            <Pointer className="h-5 w-5 mt-3 text-gray-500 fill-orange-50" />
          </div>
          <p className="text-[10px] text-gray-500 t xl:text-sm">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PointersComp;
