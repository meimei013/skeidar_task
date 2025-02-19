"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

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

export const MobileMenu = () => {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent side="left" className="">
          <SheetHeader>
            <SheetTitle />
            <SheetDescription />
            <Link href="/" className="relative">
              <Image
                src={"/logo.png"}
                alt="skeidar-logo"
                className="cursor-pointer"
                width={110}
                height={80}
                priority
              />
            </Link>
          </SheetHeader>
          <nav className="md:hidden flex flex-col gap-3 pt-3 border-t ">
            <SheetClose asChild>
              <Link href="/" className="text-base">
                Home
              </Link>
            </SheetClose>
            {navItems.map(({ label, link }, i) => {
              return (
                <SheetClose key={i} asChild>
                  <Link href={link} className="text-base">
                    {label}
                  </Link>
                </SheetClose>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};
