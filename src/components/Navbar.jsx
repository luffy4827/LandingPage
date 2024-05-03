import React from "react";
import logo from "../assets/a.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div>
      <nav className="container flex items-center py-">
        <div className="py-1 w-14 h-10">
          <img src={logo} alt="" />
        </div>
        <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Contact</li>
          <button
            type="button"
            className="bg-blue-500 text-black rounded-md px-7 py-3 uppercase"
          >
            Login
          </button>
        </ul>
        <div className="flex sm:hidden flex-1 justify-end">
        <GiHamburgerMenu className="text-2xl" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
