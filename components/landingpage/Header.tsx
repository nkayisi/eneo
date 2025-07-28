"use client";

import { ArrowRight, Menu, Search, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function Header() {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Facilities", href: "/facilities" },
    { label: "Membership", href: "/membership" },
  ];

  return (
    <section className="w-full flex flex-col md:flex-row gap-4 justify-between items-center py-5">
      <div className="w-full flex items-center gap-5 justify-between md:max-w-xs">
        <div className="w-full flex items-center gap-2">
          <Sun className="w-7 h-7" />
          <h1 className="text-2xl">Eneo</h1>
          {/* <p>Find your next stay</p> */}
        </div>

        {/* Mobile */}
        <div className="w-max flex md:hidden gap-3 items-center">
          <DropdownMenu modal>
            <DropdownMenuTrigger className="cursor-pointer focus:outline-none">
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mr-5">
              <DropdownMenuLabel>Principal Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {menuItems.map((item) => (
                <DropdownMenuItem key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <ul className="w-full text-sm hidden md:flex gap-10 items-center">
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <div className="w-full md:w-max flex gap-3 items-center justify-between md:justify-normal">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search here..."
            className="bg-gray-100 rounded-full py-2.5 pl-4 pr-12 w-full md:w-52 text-sm"
          />
          <button className="bg-white absolute right-1.5 p-2 rounded-full">
            <Search className="w-4 h-4" />
          </button>
        </div>

        <div>
          <button className="bg-black cursor-pointer text-white py-1.5 px-2 flex gap-2 rounded-full text-sm items-center">
            <span className="truncate">Book Now</span>
            <span className="p-1 bg-white rounded-full">
              <ArrowRight className="-rotate-45 w-4 h-4 text-black" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
