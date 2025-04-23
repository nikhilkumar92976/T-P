import React from 'react'
import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { MdOutlineFilter9Plus } from "react-icons/md";
import { SiAlwaysdata } from "react-icons/si";
import { MdSignLanguage } from "react-icons/md";
import { FaBrain } from "react-icons/fa6";
import { MdAdb } from "react-icons/md";
import { RiSortNumberAsc } from "react-icons/ri";

import { LuComputer } from "react-icons/lu";
import { FaHistory } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";

import { LuCodeXml } from "react-icons/lu";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

function Sidebar() {
   
  return (
    <div className='w-1/5   px-4 py-8 bg-[#10141E] border-r border-gray-500 '>
      <div className='flex flex-col '>
        {/* Logo */}
        <div className='flex justify-center sm:justify-start mb-3'>
          <i className="text-[#6556CD] mr-2 ri-tv-fill text-2xl "></i>
          <h2 className='text-2xl sm:text-2xl font-bold flex ml-6'>
            <span className='hover:text-[#6556CD]'>Next </span>
            <span className='text-[#6556CD] hover:text-white'> Step</span>
          </h2>
        </div>

        
        <hr className='h-[1px] mt-1 border-none bg-zinc-400' />
        {/* Navigation NavLinks */}
        <h2 className='text-lg sm:text-[1.3vw] mb-1 mt-2 font-semibold text-center sm:text-left'>New Features</h2>
        <nav className='flex flex-col  items-center sm:items-start'>
          
          <NavLink to="/dashboard/tests"className='hover:bg-[#6556CD] flex gap-3 text-[1.1vw] sm:text-[1.4vw] w-full hover:text-white mt-3 px-4 py-3 rounded-md duration-300 text-zinc-400 sm:text-[1.1vw]'          >
             <LuComputer className='mt-1'/> Tests
          </NavLink>
          <NavLink to="/dashboard/history"className='hover:bg-[#6556CD] flex gap-3 text-[1.1vw] sm:text-[1.4vw] w-full hover:text-white mt-3 px-4 py-3 rounded-md duration-300 text-zinc-400 sm:text-[1.1vw]'          >
             <FaHistory className='mt-1'/> History
          </NavLink>
          <NavLink to="/dashboard/prepration"className='hover:bg-[#6556CD] flex gap-3 text-[1.1vw] sm:text-[1.4vw] w-full hover:text-white mt-3 px-4 py-3 rounded-md duration-300 text-zinc-400 sm:text-[1.1vw]'          >
             <LuNotebookPen className='mt-1'/> Prepration
          </NavLink>
          <NavLink to="/dashboard/codeeditor"className='hover:bg-[#6556CD] flex gap-3 text-[1.1vw] sm:text-[1.4vw]  w-full hover:text-white mt-3 px-4 py-3 rounded-md duration-300 text-zinc-400 sm:text-[1.1vw]'          >
             <LuCodeXml  className='mt-1'/> CodeEditor
          </NavLink>  
          </nav>
          {/* <NavLink to="/"className='hover:bg-[#6556CD] flex gap-3 text-[1.1vw] sm:text-[1.4vw]  w-full hover:text-white mt-3 px-4 py-3 rounded-md duration-300 text-zinc-400 sm:text-[1.1vw]'          >
             <MdOutlineFilter9Plus className='mt-1'/> Aptitude
          </NavLink>
          <NavLink to="/"className='hover:bg-[#6556CD] flex gap-3 text-[1.1vw] sm:text-[1.4vw]  w-full hover:text-white mt-3 px-4 py-3 rounded-md duration-300 text-zinc-400 sm:text-[1.1vw]'          >
             <SiAlwaysdata className='mt-1'/> Data Inperpretation
          </NavLink>
          <NavLink to="/"className='hover:bg-[#6556CD] flex gap-3 text-[1.1vw] sm:text-[1.4vw]  w-full hover:text-white mt-3 px-4 py-3 rounded-md duration-300 text-zinc-400 sm:text-[1.1vw]'          >
             <MdSignLanguage className='mt-1'/> Verbal Ability
          </NavLink>
          <NavLink to="/"className='hover:bg-[#6556CD] flex gap-3 text-[1.1vw] sm:text-[1.4vw]  w-full hover:text-white mt-3 px-4 py-3 rounded-md duration-300 text-zinc-400 sm:text-[1.1vw]'          >
             <FaBrain className='mt-1'/> Logical Reasoning
          </NavLink>
          <NavLink to="/"className='hover:bg-[#6556CD] flex gap-3 text-[1.1vw] sm:text-[1.4vw]  w-full hover:text-white mt-3 px-4 py-3 rounded-md duration-300 text-zinc-400 sm:text-[1.1vw]'          >
             <MdAdb className='mt-1'/> Verbal Reasoning
          </NavLink>
          <NavLink to="/"className='hover:bg-[#6556CD] flex gap-3 text-[1.1vw] sm:text-[1.4vw]  w-full hover:text-white mt-3 px-4 py-3 rounded-md duration-300 text-zinc-400 sm:text-[1.1vw]'          >
             <RiSortNumberAsc className='mt-1'/> NonVerbal Ability
          </NavLink>
       */}
      

        <hr className='h-[1px] mt-1 border-none bg-zinc-400' />
        <nav className='flex flex-col  items-center sm:items-start'>
              
          <NavLink to="/dashboard/about"className='hover:bg-[#6556CD] flex gap-3 text-[1.1vw] sm:text-[1.4vw]  w-full hover:text-white mt-3 px-4 py-3 rounded-md duration-300 text-zinc-400 sm:text-[1.1vw]'          >
             <MdOutlineContactSupport   className='mt-1'/> About
          </NavLink>
          <NavLink to="/dashboard/contact"className='hover:bg-[#6556CD] flex gap-3 text-[1.1vw] sm:text-[1.4vw]  w-full hover:text-white mt-3 px-4 py-3 rounded-md duration-300 text-zinc-400 sm:text-[1.1vw]'          >
             <IoCallSharp  className='mt-1'/> Help
          </NavLink>
        </nav>
        

      </div>
  </div>
  )
}

export default Sidebar
