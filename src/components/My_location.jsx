import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmog } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";

const My_location = () => {
  return (
    <div className="mt-3">
      <div className="bg-black min-h-[350px] min-w-[450px] w-[624px] rounded-md ml-10">
        <p className="text-2xl font-bold pl-4 pt-4 text-white">
          Chennai,{" "}
          <span className="text-[#929292] font-medium text-sm ">TamilNadu</span>
        </p>
        <p className="text-[#929292] ml-5 font-bold">IN</p>
        <div className="grid grid-cols-2 relative h-[100%]">
          <div className="">
            <div className="flex ">
              <p className="text-7xl text-white font-bold my-9 mx-5">27°</p>
              <div className="mt-11">
                <p className="text-[#929292]">Feels Like</p>
                <span className="text-[#1d64c7]">25°↑ </span>
                <span className="text-[#BF5661]">25°↓</span>
              </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="">
                    <p className="text-xl text-white font-bold ml-5 ">Humidity </p>
                    <div className="flex mt-3 ml-5">
                        <p className="mr-4">
                        <FontAwesomeIcon icon={faDroplet} style={{color:"#1d64c7"}}/>
                    </p>
                    <span className="text-[#929292]  ">69%</span>
                    </div>
                </div>
                <div>
                    <p className="text-white text-xl font-bold">Wind Speed</p>
                    <div className="flex mt-3 ml-3">
                        <p className="mr-4"><FontAwesomeIcon icon={faWind} style={{color:"#1d64c7"}}/></p>
                    <span className="text-[#929292] ">2.06 m/s</span>
                    </div>
                </div>
                

            </div>
          </div>
          <div className="absolute top-15 right-[15%]">
            <div className="col-span-1 text-8xl ">
              <FontAwesomeIcon icon={faSmog} style={{ color: "#929292" }} />
            </div>
            <p className="text-[#929292] text-center mt-5 text-xl font-medium">
              Haze
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default My_location;
