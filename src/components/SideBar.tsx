import React from "react";
import Logo from "../assets/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBorderAll } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div className="bg-rvnComponentBG h-full max-w-[232px] rounded-xl pt-3">
      <div className="flex justify-center pb-4">
        <img src={Logo} alt="logo of ravn" />
      </div>
      <div className="text-gray-500 flex flex-col">
        <a
          href="#"
          className="hover:text-rvnRed hover:bg-gradient-to-r from-rvnComponentBG  to-rvnRedGradient  p-4 focus:border-r-4 focus:border-rvnRed focus:text-rvnRed focus:bg-gradient-to-r"
        >
          <FontAwesomeIcon icon={faBorderAll} /> DASHBOARD
        </a>
        <a
          href="#"
          className="hover:text-rvnRed hover:bg-gradient-to-r from-rvnComponentBG to-rvnRedGradient  p-4 focus:border-r-4 focus:border-rvnRed focus:text-rvnRed focus:bg-gradient-to-r"
        >
          <FontAwesomeIcon icon={faBars} /> MY TASK
        </a>
      </div>
    </div>
  );
};

export default SideBar;
