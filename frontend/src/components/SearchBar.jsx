import React from 'react'
import { CiSearch } from "react-icons/ci";

function SearchBar() {
  return (
    <div className='px-30 pt-10'>
      <hr className="text-gray-300 " />

      <div className='bg-white border-yellow-800 shadow-lg rounded-xl p-8 my-10'>
        <p className='flex gap-1 items-center roman-font'><CiSearch /> FILTER</p>

        {/* filter input  */}
        <div className='flex justify-between px-5 pt-3'>
        <div className='w-xl'>
          <p className='text-xs font-bold pb-1 text-gray-700'>SEARCH</p>
          <input type="text" placeholder='Name, email, or message....' className="rounded-lg w-full py-1 px-2 bg-orange-50 border border-yellow-700 outline-yellow-900"/>
        </div>
        <div className='w-xl'>
          <p className='text-xs font-bold pb-1 text-gray-700'>FILTER BY DATE</p>
          <input type="date" className="rounded-lg w-full py-1 px-2 bg-orange-50 border border-yellow-700 outline-yellow-900"/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
