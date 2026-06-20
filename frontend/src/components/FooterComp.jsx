import React from "react";
import { LuMessagesSquare } from "react-icons/lu"
import { FaRegCopyright } from "react-icons/fa";

function FooterComp() {
  return (
    <>
    <div className="flex justify-between px-5 md:px-30 py-1 md:py-3">
      <div className="flex gap-1 justify-center items-center">
        <LuMessagesSquare className="text-yellow-700 text-xs md:text-sm" />{" "}
        <p className="roman-font text-xs md:text-sm">Feedbackify</p>
      </div>

      <div className="flex gap-1 justify-center items-center text-xs">
        <FaRegCopyright /> <p>2026 All rights reserved.</p>
      </div>
    </div>
    </>
  );
}

export default FooterComp;
