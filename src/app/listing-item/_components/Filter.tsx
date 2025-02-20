"use client";
import React, { useState } from "react";
import { Menu, SlidersHorizontal } from "lucide-react";

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

export const FilterComp = () => {
  const filterData = ["sofa", "bed", "dining"];
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <SlidersHorizontal className="w-4 h-4 xl:w-6 xl:h-6" />
        </SheetTrigger>
        <SheetContent side="left" className="">
          <SheetHeader>
            <SheetTitle />
            <SheetDescription />
            <div className="text-left">Filter Data</div>
          </SheetHeader>
          <nav className="flex flex-col gap-3 pt-3 border-t ">
            {["sofa", "bed", "dining"].map((item, i) => {
              return (
                <SheetClose key={i} asChild>
                  <div className="flex gap-2">
                    <input type="checkbox" name="filter" value="highToLow" />
                    <span> {item}</span>
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
