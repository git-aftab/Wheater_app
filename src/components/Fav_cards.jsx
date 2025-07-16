import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmog,
  faCircle,
  faCloud,
  faXmark,
  faSun
} from "@fortawesome/free-solid-svg-icons";

const Fav_cards = () => {
  return (
    <div className="flex mx-10 mt-2 space-x-4 overflow-x-auto scroll-smooth hide-scrollbar">
      <div className="bg-black text-white px-2 py-2 grid grid-cols-4  min-w-[300px] h-[100px] relative justify-center rounded mx-2">
        <span className="absolute right-1 cursor-pointer">
            <FontAwesomeIcon icon={faXmark}/>
        </span>
        
        <div className="p-1 text-xl flex place-items-center justify-center">
          <FontAwesomeIcon icon={faSmog} style={{ color: "#929292" }} />
        </div>
        <div className="ml-2 col-span-2 pt-5">
          <div className="text-white text-xl font-bold">Paris</div>
          <div className="text-[#929292] font-medium">FR</div>
        </div>
        <div className="pt-5">
          <div className="font-bold text-xl">17°</div>
          <div className="text-[#929292] font-medium">Mist</div>
        </div>
      </div>
      <div className="bg-black text-white px-2 py-2 grid grid-cols-4  min-w-[300px] h-[100px] relative justify-center rounded mx-2">
        <span className="absolute right-1 cursor-pointer">
            <FontAwesomeIcon icon={faXmark}/>
        </span>
        
        <div className="p-1 text-xl flex place-items-center justify-center">
          <FontAwesomeIcon icon={faCircle} style={{ color: "orange" }} />
        </div>
        <div className="ml-2 col-span-2 pt-5">
          <div className="text-white text-xl font-bold">Los Angeles</div>
          <div className="font-medium text-[#929292]">US</div>
        </div>
        <div className=" pt-5">
          <div className="text-xl font-bold">17°</div>
          <div className="text-[#929292] font-medium">Clear Sky</div>
        </div>
      </div>
      <div className="bg-black text-white px-2 py-2 grid grid-cols-4  min-w-[300px] h-[100px] relative justify-center rounded mx-2">
        <span className="absolute right-1 cursor-pointer">
            <FontAwesomeIcon icon={faXmark}/>
        </span>
        
        <div className="p-1 text-xl flex place-items-center justify-center">
          <FontAwesomeIcon icon={faCloud} style={{ color: "#929292" }} />
        </div>
        <div className="ml-2 col-span-2">
          <div className="text-white text-x pt-5 text-xl font-bold">Puducherry</div>
          <div className="text-[#929292] font-medium">IN</div>
        </div>
        <div className=" pt-5">
          <div className="text-xl font-bold">24°</div>
          <div className="text-[#929292] font-medium">Cloudy</div>
        </div>
      </div>
      <div className="bg-black text-white px-2 py-2 grid grid-cols-4  min-w-[300px] h-[100px] relative justify-center rounded mx-2">
        <span className="absolute right-1 cursor-pointer">
            <FontAwesomeIcon icon={faXmark}/>
        </span>
        
        <div className="p-1 text-xl flex place-items-center justify-center">
          <FontAwesomeIcon icon={faSun} style={{ color: "yellow" }} />
        </div>
        <div className="ml-2 col-span-2 pt-5">
          <div className="text-white text-xl font-bold">Chennai</div>
          <div className="text-[#929292] font-medium">IN</div>
        </div>
        <div className=" pt-5">
          <div className="text-xl font-bold">35°</div>
          <div className="text-[#929292] font-medium">Sunny</div>
        </div>
      </div>
      <div className="bg-black text-white px-2 py-2 grid grid-cols-4  min-w-[300px] h-[100px] relative justify-center rounded mx-2">
        <span className="absolute right-1 cursor-pointer">
            <FontAwesomeIcon icon={faXmark}/>
        </span>
        
        <div className="p-1 text-xl flex place-items-center justify-center">
          <FontAwesomeIcon icon={faSmog} style={{ color: "#929292" }} />
        </div>
        <div className="ml-2 col-span-2 pt-5">
          <div className="text-white text-xl font-bold">New York</div>
          <div className="text-[#929292] font-medium">US</div>
        </div>
        <div className="pt-5">
          <div className="text-xl font-bold">17°</div>
          <div className="text-[#929292] font-bold">Mist</div>
        </div>
      </div>
      <div className="bg-black text-white px-2 py-2 grid grid-cols-4  min-w-[300px] h-[100px] relative justify-center rounded mx-2">
        <span className="absolute right-1 cursor-pointer">
            <FontAwesomeIcon icon={faXmark}/>
        </span>
        
        <div className="p-1 text-xl flex place-items-center justify-center">
          <FontAwesomeIcon icon={faCloud} style={{ color: "#929292" }} />
        </div>
        <div className="ml-2 col-span-2 pt-5">
          <div className="text-white text-xl font-bold">London</div>
          <div className="text-[#929292] font-medium">Eng</div>
        </div>
        <div className="pt-5">
          <div className="text-xl font-bold">22°</div>
          <div className="text-[#929292] font-medium">cloudy</div>
        </div>
      </div>
    </div>
  );
};

export default Fav_cards;
