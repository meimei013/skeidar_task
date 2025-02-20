"use client";
import React from "react";
import Image from "next/image";
import { UserRound, ShoppingBasket } from "lucide-react";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./MobileMenu";
import SearchBar from "./SearchBar";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="w-full h-[80px] xl:h-[100px] bg-white fixed z-10 border-b border-gray-300">
      <div className="bg-red-600 relative xl:text-base text-xs text-center font-thin tracking-wide text-white p-2 uppercase">
        Campaign Message line with movement
      </div>
      <div className=" p-2 flex gap-4 items-center justify-between ">
        <div className="block md:hidden">
          <MobileMenu />
        </div>
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt={"logo"}
            width={"220"}
            height={"100"}
            priority
            className="mt-0 xl:mt-2"
          />
        </Link>
        <div className="w-1/2 xl:block hidden">
          <SearchBar />
        </div>
        <div className="flex mt-0 xl:mt-2 gap-2 items-center justify-center">
          <div className="relative">
            <UserRound className="w-6 h-6" />
          </div>
          <div className="relative">
            <ShoppingBasket className="w-6 h-6" />
          </div>
        </div>
      </div>
      {pathname === "/" && (
        <div className="w-full md:hidden block">
          <SearchBar />
        </div>
      )}
    </div>
  );
};

export default Header;
