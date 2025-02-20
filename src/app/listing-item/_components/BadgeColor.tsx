import { Circle } from "lucide-react";
import React from "react";

const BadgeColor = () => {
  const arrcolor = [
    { color: "fill-slate-200 text-slate-200", label: "slate" },
    { color: "fill-gray-400 text-gray-400", label: "gray" },
    { color: "fill-orange-500 text-orange-500", label: "orange" },
  ];
  return (
    <div className="flex items-center justify-center gap-1">
      {arrcolor.map((item) => (
        <Circle key={item.label} className={`w-4 h-4 ${item.color}`} />
      ))}
    </div>
  );
};

export default BadgeColor;
