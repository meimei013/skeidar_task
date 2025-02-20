import React from "react";

interface MarqueeProps {
  message: string;
}

const Marquee = ({ message }: MarqueeProps) => {
  return (
    <div className="overflow-hidden h-[40px] bg-red-600 p-2">
      <div className="whitespace-nowrap animate-marquee">
        <p className="inline-block uppercase tracking-wide mr-2 text-sm text-white">
          {message}
        </p>
      </div>
    </div>
  );
};

export default Marquee;
