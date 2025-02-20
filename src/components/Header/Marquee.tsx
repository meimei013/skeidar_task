import React from "react";

const Marquee = () => {
  return (
    <div className="overflow-hidden h-[40px] bg-red-600 p-2">
      <div className="whitespace-nowrap animate-marquee">
        <p className="inline-block uppercase tracking-wide mr-2 text-sm text-white">
          Campaign Message line with movement
        </p>
      </div>
    </div>
  );
};

export default Marquee;
