import React from "react";
import imgVector1 from "../assets/vector1.png";

const Banner = ({ count, resolvedCount }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:w-[1240px] mx-auto my-12 p-4">
      <div className="relative rounded-md p-6 md:p-8 text-white h-[180px] md:h-[200px] bg-gradient-to-r from-[#6C35E5] to-[#9156EF] flex flex-col items-center justify-center">
        <h2 className="font-bold text-2xl md:text-3xl">In-Progress</h2>
        <p className="font-semibold text-xl md:text-2xl">{count}</p>
        <img
          className="absolute top-0 left-0 h-[180px] md:h-[200px]"
          src={imgVector1}
          alt=""
        />
        <img
          className="absolute top-0 right-0 h-[180px] md:h-[200px] scale-x-[-1]"
          src={imgVector1}
          alt=""
        />
      </div>

      <div className="relative rounded-md p-6 md:p-8 text-white h-[180px] md:h-[200px] bg-gradient-to-r from-[#47C36B] to-[#01827A] flex flex-col items-center justify-center">
        <h2 className="font-bold text-2xl md:text-3xl">Resolved</h2>
        <p className="font-semibold text-xl md:text-2xl">{resolvedCount}</p>
        <img
          className="absolute top-0 left-0 h-[180px] md:h-[200px]"
          src={imgVector1}
          alt=""
        />
        <img
          className="absolute top-0 right-0 h-[180px] md:h-[200px] scale-x-[-1]"
          src={imgVector1}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
