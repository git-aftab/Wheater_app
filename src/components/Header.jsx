import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import Klimate_logo from "../assets/Klimate_logo.jpg";
import logo3 from "../assets/logo3.jpg";

const Header = () => {
  return (
    <div className="flex py-2 px-10 bg-black justify-between items-center">
      <div className="flex items-center">
        <img src={logo3} alt="logo" className="h-10 m-1" />
        <p className="text-white font-bold text-xl">Klimate</p>
      </div>
      <div className="flex items-center">
        <div className="border-[1px] border-[#929292] rounded px-2">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#929292" }}
          className="cursor-pointer"/>
          <input
            type="text"
            placeholder="Enter the City Name"
            className="bg-[#0b0b0b] text-[#929292] border-none m-1 rounded pl-3 py-1 text-sm w-[300px] placeholder:text-xs focus:outline-none focus:ring-0"
          />
        </div>
        <div className="hidden">
          <FontAwesomeIcon icon={faSun} style={{ color: "orange" }} className="ml-7 cursor-pointer" />
        </div>
        <div className="">
          <FontAwesomeIcon icon={faMoon} style={{ color: "purple" }} className="ml-7 cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
