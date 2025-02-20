"use client";
import React from "react";
import Image from "next/image";
import { UserRound, ShoppingBasket } from "lucide-react";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./MobileMenu";
import SearchBar from "./SearchBar";
import Link from "next/link";
import Marquee from "../Marquee";
import Cart from "../Cart";

const Header = () => {
  const pathname = usePathname();
  const dynamicBg = pathname === "/" ? "bg-red-500" : "bg-orange-400";
  const orderNo = 3;
  return (
    <div className="w-full h-[100px] bg-orange-50 fixed z-10 border-b border-gray-300">
      <Marquee
        message={"campaign message line with movement"}
        bgColor={dynamicBg}
      />
      <div className="relative h-[60px] px-4 flex gap-4 items-center justify-between ">
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
            className="mt-0"
          />
        </Link>
        <div className="w-1/2 xl:block hidden">
          <SearchBar />
        </div>
        <div className="flex mt-0 xl:mt-2 gap-2 mr-2 items-center justify-center">
          <div className="relative">
            <UserRound className="w-6 h-6" />
          </div>
          <Cart orderNo={orderNo} />
        </div>
      </div>
      {pathname === "/" && (
        <div className="relative h-[40px] w-full md:hidden block">
          <SearchBar />
        </div>
      )}
    </div>
  );
};

export default Header;
