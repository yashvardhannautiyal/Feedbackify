import React from "react";
import { CiSearch } from "react-icons/ci";

function SearchBar({ searchTerm, setSearchTerm, searchDate, setSearchDate }) {
  return (
    <div className="px-5 md:px-30 pt-5 md:pt-10">
      <hr className="text-gray-300 " />

      <div className="bg-white border-yellow-800 shadow-lg rounded-xl p-3 md:p-8 my-10">
        <p className="flex gap-1 items-center roman-font text-sm">
          <CiSearch /> FILTER
        </p>

        {/* filter input  */}
        <div className="md:flex justify-between sm:gap-3 lg:px-5 py-3">
          <div className="md:w-lg lg:w-xl pb-3 sm:pb-0">
            <p className="text-xs font-bold md:pb-1 text-gray-700">SEARCH</p>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Name, email, or message...."
              className="rounded-lg w-full py-1 px-2 bg-orange-50 border border-yellow-700 outline-yellow-900 text-xs md:text-sm"
            />
          </div>
          <div className="md:w-lg lg:w-xl">
            <p className="text-xs font-bold md:pb-1 text-gray-700">
              FILTER BY DATE
            </p>
            <input
              type="date"
              value={searchDate}
              onChange={(e) => setSearchDate(e.target.value)}
              className="rounded-lg w-full py-1 px-2 bg-orange-50 border border-yellow-700 outline-yellow-900 text-xs md:text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
