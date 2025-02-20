import { Circle } from "lucide-react";
import React from "react";

const BadgeColor = () => {
  return (
    <div className="flex items-center justify-center gap-1">
      <Circle className="w-4 h-4 fill-slate-200 text-slate-200" />
      <Circle className="w-4 h-4 fill-gray-400 text-gray-400" />
      <Circle className="w-4 h-4 fill-orange-500 text-orange-500" />
    </div>
  );
};

export default BadgeColor;
