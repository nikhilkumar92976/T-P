import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { MdOutlineFilter9Plus } from "react-icons/md";
import { SiAlwaysdata } from "react-icons/si";
import { MdSignLanguage } from "react-icons/md";
import { FaBrain } from "react-icons/fa6";
import { MdAdb } from "react-icons/md";
import { RiSortNumberAsc } from "react-icons/ri";
import { LuCodeXml } from "react-icons/lu";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div
    className={`fixed sm:static bg-[#10141E] min-h-screen border-r-2 border-zinc-500 pt-6 px-8 z-20 transition-all duration-300 ${
      isOpen ? 'w-[80%]' : 'w-0 sm:w-[23%]'
    } ${isOpen || window.innerWidth >= 640 ? 'opacity-100' : 'opacity-0'}`}
    >
    {/* Toggle Button */}
    <button
      onClick={toggleSidebar}
      className="sm:hidden absolute top-4 right-4 text-2xl text-[#6556CD] z-50"
    >
      {isOpen ? <i className="ri-xing-line"></i> : <i className="ri-menu-fill text-[#6556CD]"></i>}
    </button>

    {/* Sidebar Content */}
    {isOpen || window.innerWidth >= 640 ? (
      <div className='flex flex-col '>
        {/* Logo */}
        <div className='flex justify-center sm:justify-start mb-3'>
          <i className="text-[#6556CD] mr-2 ri-tv-fill text-2xl "></i>
          <h2 className='text-2xl sm:text-2xl font-bold flex ml-16'>
            <span className='hover:text-[#6556CD]'>Next </span>
            <span className='text-[#6556CD] hover:text-white'> Step</span>
          </h2>
        </div>

        
        <hr className='h-[1px] mt-1 border-none bg-zinc-400' />
        {/* Navigation Links */}
        <h2 className='text-lg sm:text-[1.3vw] mb-1 mt-2 font-semibold text-center sm:text-left'>New Features</h2>
        <nav className='flex flex-col  items-center sm:items-start'>
          <Link to="/"className='hover:bg-[#6556CD] flex gap-3 text-[1.1vw] sm:text-[1.4vw] w-full hover:text-white mt-3 px-4 py-3 rounded-md duration-300 text-zinc-400 sm:text-[1.1vw]'          >
             <FaHome className='mt-1'/> Home
          </Link>
          <Link to="/"className='hover:bg-[#6556CD] flex gap-3 text-[1.1vw] sm:text-[1.4vw]  w-full hover:text-white mt-3 px-4 py-3 rounded-md duration-300 text-zinc-400 sm:text-[1.1vw]'          >
             <MdOutlineFilter9Plus className='mt-1'/> Arithmetic Aptitude
          </Link>
          <Link to="/"className='hover:bg-[#6556CD] flex gap-3 text-[1.1vw] sm:text-[1.4vw]  w-full hover:text-white mt-3 px-4 py-3 rounded-md duration-300 text-zinc-400 sm:text-[1.1vw]'          >
             <SiAlwaysdata className='mt-1'/> Data Inperpretation
          </Link>
          <Link to="/"className='hover:bg-[#6556CD] flex gap-3 text-[1.1vw] sm:text-[1.4vw]  w-full hover:text-white mt-3 px-4 py-3 rounded-md duration-300 text-zinc-400 sm:text-[1.1vw]'          >
             <MdSignLanguage className='mt-1'/> Verbal Ability
          </Link>
          <Link to="/"className='hover:bg-[#6556CD] flex gap-3 text-[1.1vw] sm:text-[1.4vw]  w-full hover:text-white mt-3 px-4 py-3 rounded-md duration-300 text-zinc-400 sm:text-[1.1vw]'          >
             <FaBrain className='mt-1'/> Logical Reasoning
          </Link>
          <Link to="/"className='hover:bg-[#6556CD] flex gap-3 text-[1.1vw] sm:text-[1.4vw]  w-full hover:text-white mt-3 px-4 py-3 rounded-md duration-300 text-zinc-400 sm:text-[1.1vw]'          >
             <MdAdb className='mt-1'/> Verbal Reasoning
          </Link>
          <Link to="/"className='hover:bg-[#6556CD] flex gap-3 text-[1.1vw] sm:text-[1.4vw]  w-full hover:text-white mt-3 px-4 py-3 rounded-md duration-300 text-zinc-400 sm:text-[1.1vw]'          >
             <RiSortNumberAsc className='mt-1'/> NonVerbal Ability
          </Link>
          <Link to="/codeeditor"className='hover:bg-[#6556CD] flex gap-3 text-[1.1vw] sm:text-[1.4vw]  w-full hover:text-white mt-3 px-4 py-3 rounded-md duration-300 text-zinc-400 sm:text-[1.1vw]'          >
             <LuCodeXml  className='mt-1'/> CodeEditor
          </Link>
          
        </nav>

      </div>
    ) : null}
  </div>
  )
}

export default Sidebar
