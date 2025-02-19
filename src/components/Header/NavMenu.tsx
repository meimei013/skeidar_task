import React from "react";
import { navItems } from "@/utils/constant";
import Link from "next/link";

const NavMenu = () => {
  return (
    <nav className="bg-white py-2">
      <div className="flex">
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col px-4 md:p-0 rounded-lg md:flex-row md:space-x-4 rtl:space-x-reverse">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className="py-2 px-3 text-gray-600 hover:text-gray-800 hover:underline"
                  aria-current="page"
                >
                  <span> {item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
