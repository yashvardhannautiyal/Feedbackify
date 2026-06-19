import React from "react";
import { CiMail } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";

function Feedback() {
  return (
    <div className="px-30 pb-10">
      <p className="text-gray-700">Showing 2 entries</p>
      <div className="bg-white border-yellow-800 shadow-lg rounded-xl p-8 mt-2 px-10">
       {/* user details  */}
        <div className="flex justify-between items-center">

          {/* name + email  */}
          <div>
            <p className='flex gap-1 items-center font-bold text-lg'><CiUser />Michael Chen</p>
            <p className='flex gap-1 items-center text-sm text-gray-600'><CiMail /> mchen@gmail.com</p>
          </div>

          {/* date + delete button  */}
          <div className="flex gap-4 items-center">
            <div className="bg-orange-50 rounded-xl px-2"><p>Jun 12, 2026</p></div>
            <button className="text-red-700 hover:bg-red-100 hover:cursor-pointer p-1 rounded-sm"><RiDeleteBinLine /></button>
          </div>
        </div>

        {/* feedback  */}
        <div className="pt-7">
          <p>The user interface could be more intuitive. Consider adding more tooltips.</p>
          <p className="pt-4 text-gray-600 text-sm">Submitted on Jun 12, 2026, 05:30 AM</p>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
