import React from "react";
import { Link } from "react-scroll";
import { NavlinkData } from "../lib/definitions";

function MobileMenuOverlay({ navLinks }: { navLinks: NavlinkData[] }) {
  return (
    <nav>
      <ul className="flex flex-col py-4 items-center">
        {navLinks.map((navlink, index) => (
          <li key={navlink.id}>
            <Link
              className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 cursor-pointer hover:text-white"
              to={navlink.title}
              smooth={true}
              offset={-85}
            >
              {navlink.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MobileMenuOverlay;
