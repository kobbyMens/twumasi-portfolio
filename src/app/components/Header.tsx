"use client";
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { nanoid } from "nanoid";
import MobileMenuOverlay from "./MobileMenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

export const navlinks = [
  { title: "About", path: "#about", id: nanoid() },
  { title: "Projects", path: "#projects", id: nanoid() },
  { title: "Contact", path: "#contact", id: nanoid() },
];
function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 border border-[#33353F] right-0 z-10 bg-[#121212] bg-opacity-90">
      {" "}
      <div className="flex flex-wrap container lg:py-4 items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          LOGO
        </Link>
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded text-slate-200 hover:border-white"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded text-slate-200 hover:border-white"
            >
              {" "}
              <Bars3Icon className="w-5 h-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <nav className="">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
              {navlinks.map((navlink, index) => (
                <li key={navlink.id}>
                  <ScrollLink
                    className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 cursor-pointer hover:text-white"
                    to={navlink.title}
                    smooth={true}
                    offset={-85}
                  >
                    {navlink.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      {navbarOpen ? (
        <MobileMenuOverlay navLinks={navlinks}></MobileMenuOverlay>
      ) : null}
    </header>
  );
}

export default Header;
