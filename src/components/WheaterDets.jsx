import React from "react";
import "boxicons/css/boxicons.min.css";
import SunRise from "./SunRise";
import SunSet from "./SunSet";
import Speed from "./Speed";
import Air_dirctn from "./Air_dirctn";

const WheaterDets = () => {
  return (
    <div className="absolute top-[100%] ml-10 mt-7">
        <p className="text-white text-2xl font-bold">Weather Details</p>
        <div className="h-[220px] w-[629px] bg-black rounded-md mt-3 p-3">
          <div className="grid grid-cols-2">
            <div className=" mt-5 border border-[#3a3a3a] rounded-md flex flex-col justify-center">
              <div className="flex">
                <span>
                  <SunRise className="text-[#1d64c7] mt-2 ml-2" />
                </span>
                <p className="text-white text-xl col-span-1 font-bold ml-3 mt-2">
                  Sun rise
                </p>
              </div>
              <p className="text-m font-semibold text-[#929292] ml-12">
                6:30 AM
              </p>
            </div>
            <div className="ml-3 mt-5 border border-[#3a3a3a] rounded-md flex flex-col justify-center">
              <div className="flex">
                <span>
                  <SunSet className="text-[#1d64c7] mt-2 ml-2" />
                </span>
                <p className="text-white text-xl col-span-1 font-bold ml-3 mt-2">
                  Sun Set
                </p>
              </div>
              <p className="text-m font-semibold text-[#929292] ml-12">
                6:30 PM
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="mt-5 border border-[#3a3a3a] rounded-md flex flex-col justify-center">
              <div className="flex">
                <span>
                  <Air_dirctn className="text-[#1d64c7] mt-2 ml-2" />
                </span>
                <p className="text-white text-xl col-span-1 font-bold ml-3 mt-2">
                  Wind Direction
                </p>
              </div>
              <p className="text-m font-semibold text-[#929292] ml-12">
                North East
              </p>
            </div>
            <div className=" ml-3 mt-5 border border-[#3a3a3a] rounded-md flex flex-col justify-center">
              <div className="flex">
                <span>
                  <Speed className="text-[#1d64c7] mt-2 ml-2" />
                </span>
                <p className="text-white text-xl col-span-1 font-bold ml-3 mt-2">
                  Pressure
                </p>
              </div>
              <p className="text-m font-semibold text-[#929292] ml-12">
                1014 hPa
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default WheaterDets;
