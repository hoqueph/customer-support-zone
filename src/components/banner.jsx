import React from "react";
import imgVector1 from '../assets/vector1.png';

const Banner = ({ count, resolvedCount }) => {
  return (
    <div className='grid grid-cols-2 md:w-[1240px] mx-auto md:gap-5 gap-3 my-[50px] md:p-0 p-4'>
      <div className='relative rounded-md p-7 text-white h-[200px] bg-gradient-to-r from-[#6C35E5] to-[#9156EF] flex items-center flex-col justify-center'>
        <h2 className='font-bold text-[30px]'>In-Progress</h2>
        <p className='font-semibold text-[25px]'>{count}</p>
        <img className='absolute top-0 left-0 h-[200px]' src={imgVector1} alt="" />
        <img className='absolute top-0 right-0 h-[200px] scale-x-[-1]' src={imgVector1} alt="" />
      </div>

      <div className='relative rounded-md p-7 text-white h-[200px] bg-gradient-to-r from-[#47C36B] to-[#01827A] flex items-center flex-col justify-center'>
        <h2 className='font-bold text-[30px]'>Resolved</h2>
        <p className='font-semibold text-[25px]'>{resolvedCount}</p>
        <img className='absolute top-0 left-0 h-[200px]' src={imgVector1} alt="" />
        <img className='absolute top-0 right-0 h-[200px] scale-x-[-1]' src={imgVector1} alt="" />
      </div>
    </div>
  );
};

export default Banner;
