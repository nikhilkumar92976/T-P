import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { PiStudentFill } from "react-icons/pi";

const Header = () => {
  return (
    <div className="w-screen  h-14  px-8  border-b-[1px] border-b-[#1D202A]  flex justify-between items-center sticky top-0 bg-black ">
      <div className="left">
         <PiStudentFill className="text-3xl text-white "/>
      </div>
      <div className="mid flex gap-4 text-xl font-medium">
          <Link to="/" className="text-[#515DB1]">Home</Link>
          <Link to="/test " className="hover:text-[#515DB1]">About</Link>
          <Link to="/history" className="hover:text-[#515DB1]">Exams</Link>
          <Link to="/preparetion" className="hover:text-[#515DB1]">Preparetion</Link>
          <Link to="/events" className="hover:text-[#515DB1]">Events</Link>
          
      </div>
      <div className="right ">
          <Link to="/login" className="px-4 py-2 bg-[#10141E] text-md rounded-md mr-2 hover:bg-[#0c0f16f3] ">Login</Link>
          <Link to="/singup" className="px-4 py-2 bg-[#10141E] text-md rounded-md hover:bg-[#0c0f16f3]">SingUp</Link>
      </div>
      
    </div>
    
  );
};

export default Header;

// <div className="w-screen h-14  px-8  border-b-[1px] border-b-[#1D202A]  flex justify-between items-center">
    //   <div id="left">
    //     <PlatformLogo size={1} />
    //   </div>
    //   <div  id="right"  className="w-2/12 flex list-none justify-around items-center"
    //   >
    //     <li className="flex" onClick={handleTheme}>
    //       {theme==='Light'?<CiLight size={36}/>:<MdLightMode  size={36}/>}
    //     </li>
    //     <li className=" border outline-sky-100 rounded-full">
    //      <img src={logo} alt="user image" />
    //     </li>
    //   </div>
    // </div>