"use client";
import React, { useState } from "react";
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
import { navItems } from "@/utils/constant";

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
            <div className="text-left">Sort Data</div>
          </SheetHeader>
          <nav className="flex flex-col gap-3 pt-3 border-t ">
            {sortData.map(({ id, value, label }) => {
              return (
                <SheetClose key={id} asChild>
                  <div className="flex gap-2">
                    <input type="radio" name="sort" value="highToLow" />
                    <span> {label}</span>
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
