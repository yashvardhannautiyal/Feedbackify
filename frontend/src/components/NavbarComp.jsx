import React from "react";
import { LuMessagesSquare } from "react-icons/lu";
import { FiMoon } from "react-icons/fi";

function NavbarComp() {
  return (
    <>
      <header className="flex justify-between py-4 px-30">
        {/* logo  */}
        <div className="flex gap-1 justify-center items-center">
          <LuMessagesSquare className="text-yellow-700 text-2xl" />{" "}
          <p className="text-2xl roman-font font-bold">Feedbackify</p>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <FiMoon className="font-bold" />
          <button className="bg-yellow-800 hover:bg-yellow-700 py-1 px-4 rounded-xl text-white hover:cursor-pointer">Get started</button>
        </div>
      </header>
    </>
  );
}

export default NavbarComp;
