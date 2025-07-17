import React from "react";
import "boxicons/css/boxicons.min.css";
import SunRise from "./SunRise";
import SunSet from "./SunSet";

const WheaterDets = () => {
  return (
    <div className="absolute top-[100%] ml-10 mt-7">
      <div className="">
        <p className="text-white text-2xl font-bold">Weather Details</p>
        <div className="h-[300px] w-[629px] bg-black rounded-md mt-3">
          <div className="grid grid-cols-2">
            <div className=" ml-5 mt-5 border border-[#3a3a3a] rounded-md flex flex-col justify-center">
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
            <div className=" ml-5 mt-5 border border-[#3a3a3a] rounded-md flex flex-col justify-center">
              <div className="flex">
                <span>
                  <SunSet className="text-[#1d64c7] mt-2 ml-2" />
                </span>
                <p className="text-white text-xl col-span-1 font-bold ml-3 mt-2">
                  Sun Set
                </p>
              </div>
              <p className="text-m font-semibold text-[#929292] ml-12">
                6:30 AM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WheaterDets;
