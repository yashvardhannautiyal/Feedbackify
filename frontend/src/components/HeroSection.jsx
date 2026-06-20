import React from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center py-34 px-5 md:px-30 text-center">
      <div className="flex justify-center items-center gap-1 border px-10 md:px-14 md:py-1 rounded-full text-xs md:text-sm text-yellow-700">
        <FaStar />
        <p>FEEDBACK MADE SIMPLE</p>
      </div>

      {/* text  */}
      <div className="pt-4 md:pt-8 pb-3 md:pb-6 roman-font">
        <h1 className="text-4xl md:text-6xl font-bold md:font-medium">Collect feedback</h1>
        <h1 className="text-5xl md:text-7xl roman-font font-medium text-yellow-700">
          <i>that matters.</i>
        </h1>

        <p className="md:w-lg text-yellow-950 pt-2 md:pt-4 roman-font font-semi-bold text-sm md:text-lg">
          A focused tool to gather, filter, and manage user feedback — so you
          can understand what your users actually need.
        </p>
      </div>

      {/* button  */}

      <button className="text-white bg-yellow-800 hover:bg-yellow-700 rounded-xl py-1 md:py-2 px-2 w-3xs flex justify-center items-center gap-2 hover:cursor-pointer">Get started <FaArrowRight /></button>
    </div>
  );
}

export default HeroSection;
