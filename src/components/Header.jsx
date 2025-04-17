import React from "react";
import { Link } from 'react-router-dom';
import { PiStudentFill } from "react-icons/pi";

const Header = () => {
  return (
    <div className="w-screen h-14 px-8 border-b border-b-[#1D202A] flex justify-between items-center sticky top-0 bg-black z-50">
      <div className="left">
        <PiStudentFill className="text-3xl text-white" />
      </div>
      <div className="mid flex gap-4 text-xl font-medium">
        <Link to="/" className="text-[#515DB1]">Home</Link>
        <Link to="/test" className="hover:text-[#515DB1]">About</Link>
        <Link to="/history" className="hover:text-[#515DB1]">Exams</Link>
        <Link to="/preparetion" className="hover:text-[#515DB1]">Preparetion</Link>
        <Link to="/events" className="hover:text-[#515DB1]">Events</Link>
      </div>
      <div className="right">
        <Link to="/login" className="px-4 py-2 bg-[#10141E] text-md rounded-md mr-2 hover:bg-[#0c0f16f3]">Login</Link>
        <Link to="/singup" className="px-4 py-2 bg-[#10141E] text-md rounded-md hover:bg-[#0c0f16f3]">SingUp</Link>
      </div>
    </div>
  );
};

export default Header;

