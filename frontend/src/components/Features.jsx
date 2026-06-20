import React from 'react'
import { LuMessagesSquare } from "react-icons/lu";
import { MdElectricBolt } from "react-icons/md";
import { IoShieldOutline } from "react-icons/io5";

function Features() {
  return (
    <div className='md:flex justify-center md:gap-20 items-center bg-white px-5 md:px-30 py-8 md:py-15'>
        <div className='p-3 w-xs'>
        <LuMessagesSquare className='text-yellow-700 md:text-2xl'/>
        
        <h4 className='md:pt-2 md:text-xl roman-font'>Collect with ease</h4>
        <p className='text-yellow-800 md:pt-3 text-xs md:text-sm'>A clean form that captures name, email, and message. No friction, no noise.</p>
        </div>

        <div className='p-3 w-xs'>
        <MdElectricBolt className='text-yellow-700 md:text-2xl'/>
        <h4 className='md:pt-2 md:text-xl roman-font'>Filter instantly</h4>
        <p className='text-yellow-800 md:pt-3 text-xs md:text-sm'>Search by keyword or filter by date to find exactly the feedback you need.</p>
        </div>

        <div className='p-3 w-xs'>
        <IoShieldOutline className='text-yellow-700 md:text-2xl'/>
        <h4 className='md:pt-2 md:text-xl roman-font'>Stay in control</h4>
        <p className='text-yellow-800 md:pt-3 text-xs md:text-sm'>Review, organize, and delete entries with confirmation dialogs to prevent accidents.</p>
        </div>
        
    </div>
  )
}

export default Features
