import React from "react";
import { LuMessagesSquare } from "react-icons/lu"
import { FaRegCopyright } from "react-icons/fa";

function HomeFooter() {
  return (
    <>
    <div className="flex justify-between px-30 py-3">
      <div className="flex gap-1 justify-center items-center">
        <LuMessagesSquare className="text-yellow-700" />{" "}
        <p className="roman-font">Feedbackify</p>
      </div>

      <div className="flex gap-1 justify-center items-center text-xs">
        <FaRegCopyright /> <p>2026 All rights reserved.</p>
      </div>
    </div>
    </>
  );
}

export default HomeFooter;
