"use client";
import React from "react";
import { ArrowUpDown } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const SortComp = () => {
  const sortData = [
    {
      id: "1",
      value: "high",
      label: "highest price",
    },
    {
      id: "2",
      value: "low",
      label: "lowest price",
    },
    {
      id: "3",
      value: "recommended",
      label: "recommended",
    },
  ];
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <ArrowUpDown className="w-4 h-4 xl:w-6 xl:h-6" />
        </SheetTrigger>
        <SheetContent side="right" className="">
          <SheetHeader>
            <SheetTitle />
            <SheetDescription />
            <div className="text-left text-gray-600">Sort Data</div>
          </SheetHeader>
          <nav className="flex flex-col gap-3 pt-3 border-t ">
            {sortData.map(({ id, label }) => {
              return (
                <SheetClose key={id} asChild>
                  <div className="flex gap-2">
                    <input type="radio" name="sort" value="highToLow" />
                    <span className="text-gray-600"> {label}</span>
                  </div>
                </SheetClose>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};
