import React from "react";

interface MarqueeProps {
  message: string;
  bgColor: string;
}

const Marquee = ({ message, bgColor }: MarqueeProps) => {
  return (
    <div className={`overflow-hidden h-[40px] ${bgColor} p-2`}>
      <div className="whitespace-nowrap animate-marquee">
        <p className="inline-block uppercase tracking-wide mr-2 text-sm text-white">
          {message}
        </p>
      </div>
    </div>
  );
};

export default Marquee;
