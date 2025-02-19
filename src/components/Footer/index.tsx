import React from "react";
import Image from "next/image";
import { modeOfPayments, pointers } from "@/utils/constant";

const Footer = () => {
  return (
    <div className="relative p-4 mt-8 bg-gray-100 border-t border-gray-300">
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
      <div className="text-sm w-full xl:text-base mt-2 ml-2">
        <div className="w-1/2">
          <p>Aktuelt</p>
          <p>Om Skeidar</p>
          <p>Kundeservice</p>
        </div>
      </div>
      <div className="mt-2 text-center flex flex-col space-y-3 items-center justify-center">
        <Image
          src={"/logo.png"}
          alt={"logo"}
          width={250}
          height={100}
          priority
        />
        <p className="text-xs">
          ©2024-2025 SkeidarLivingGroup AS | Org.nr. 915920020
        </p>
        <p className="text-xs">Personbenerkering | Bruke avi information</p>

        <div className="flex items-end justify-center gap-4">
          {modeOfPayments.map((payment) => (
            <div key={payment.id}>
              <Image src={payment.img} width={75} height={75} alt={"alt"} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

// "use client";
// import { Pointer } from "lucide-react";
// import React from "react";

// const Footer = () => {
//   return (
//     <div className="relative p-4 mt-8 bg-gray-300 border-t border-gray-300">
//       <div className="grid grid-cols-5 gap-4">
//         <div className="text-sm">
//           <div className="relative w-10 h-5 text-center rouned bg-slate-400">
//             <Pointer className="absolute w-6 h-6 mt-2" />
//           </div>
//           <span className="block">Prisofte</span>
//         </div>
//         <div className="text-sm">Prisofte</div>
//         <div className="text-sm">Prisofte</div>
//         <div className="text-sm">Prisofte</div>
//         <div className="text-sm">Prisofte</div>
//       </div>
//       <div className="space-y-1 mt-2">
//         <p>Aktuelt</p>
//         <p>Om Skeidar</p>
//         <p>Kundeservice</p>
//       </div>
//       <div className="mt-2 text-center">
//         <p className="font-bold text-3xl tracking-[0.05em]">AQARCHAIN</p>
//         <p className="text-xs">
//           ©2024-2025 SkeidarLivingGroup AS | Org.nr. 915920020
//         </p>
//         <p className="text-xs">Personbenerkering | Bruke avi information</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;
