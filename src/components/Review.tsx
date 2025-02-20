import React from "react";

const Review = () => {
  return (
    <section className="relative w-full flex items-center justify-center gap-6 p-8">
      <div className="text-center relative">
        <div className="text-sm">⭐ ⭐ ⭐ ⭐ ⭐ </div>
        <div className="text-lg font-semibold">
          4.2 <span className="text-xs">/5</span>
        </div>

        <div className="text-xs">Basert pa 5742 stemmer</div>
      </div>
      <div className="text-center text-sm">
        Peter Joyce ⭐ ⭐ ⭐ ⭐ ⭐ <span>6.1.2025</span>
        <span className="block">Raskt og profesjonelle betjenning</span>
      </div>
    </section>
  );
};

export default Review;
