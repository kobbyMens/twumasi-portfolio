import React from "react";
import NavLink from "./NavLink";
import { NavlinkData } from "../lib/definitions";

function MobileMenuOverlay({ navLinks }: { navLinks: NavlinkData[] }) {
  return (
    <nav>
      <ul className="flex flex-col py-4 items-center">
        {navLinks.map((navlink, index) => (
          <li key={index}>
            <NavLink title={navlink.title} href={navlink.path} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MobileMenuOverlay;
