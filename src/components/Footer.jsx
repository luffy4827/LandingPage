import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
// import logo from "../assets/a.png";

const Footer = () => {
  return (
    <footer className=" py-8">
      <div className="container  h-24 flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
          {/* <img src={logo} alt=""  classNameName='py-1 w-14 h-14 '/> */}
          <ul className="flex text-black uppercase gap-12 text-xs list-none ">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
        <div className="">
          <ul className="flex gap-10 mt-12 md:mt-0">
            <li>
              <FaFacebook className=" text-2xl" />
            </li>
            <li>
              <FaTwitter className=" text-2xl" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
