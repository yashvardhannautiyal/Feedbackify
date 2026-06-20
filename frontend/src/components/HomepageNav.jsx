import React from "react";
import { LuMessagesSquare } from "react-icons/lu";
import { FiMoon } from "react-icons/fi";
import { Link } from "react-router-dom";

function HomepageNav() {
  return (
    <>
      <header className="flex justify-between py-2 md:py-4 px-5 md:px-30">
        {/* logo  */}
        <div className="flex gap-1 justify-center items-center">
          <LuMessagesSquare className="text-yellow-700 md:text-2xl" />{" "}
          <p className="md:text-2xl roman-font font-bold">Feedbackify</p>
        </div>

        <div className="flex gap-2 md:gap-4 justify-center items-center">
          <FiMoon className="font-bold" />
          <button className="bg-yellow-800 hover:bg-yellow-700 md:py-1 px-2 md:px-4 rounded-lg md:rounded-xl text-white hover:cursor-pointer">
            {" "}
            <Link to="/dashboard">Dashboard</Link>
          </button>
        </div>
      </header>
    </>
  );
}

export default HomepageNav;
