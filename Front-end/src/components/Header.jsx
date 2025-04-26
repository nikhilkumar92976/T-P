import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { PiStudentFill } from "react-icons/pi";

const Header = () => {
  return (
    <div className="w-screen h-14 px-8 border-b border-b-[#1D202A] flex justify-between items-center sticky top-0 bg-black z-50">
      <div className="left">
        <PiStudentFill className="text-3xl text-white" />
      </div>
      <div className="mid flex gap-4 text-xl font-medium">
        <NavLink to="/" className="text-[#515DB1]">Home</NavLink>
        <NavLink to="/test" className="hover:text-[#515DB1]">About</NavLink>
        <NavLink to="/history" className="hover:text-[#515DB1]">Exams</NavLink>
        <NavLink to="/preparetion" className="hover:text-[#515DB1]">Preparetion</NavLink>
        <NavLink to="/events" className="hover:text-[#515DB1]">Events</NavLink>
      </div>
      <div className="right">
      
        <NavLink to="/login" className="px-4 py-2 bg-[#10141E] text-md rounded-md mr-2 hover:bg-[#0c0f16f3]">Login</NavLink>
        <NavLink to="/signup" className="px-4 py-2 bg-[#10141E] text-md rounded-md hover:bg-[#0c0f16f3]">SingUp</NavLink>
      </div>
    </div>
  );
};

export default Header;

