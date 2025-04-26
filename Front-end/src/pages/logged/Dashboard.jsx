import React from "react";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";

function Dashboard() {
  return (
    <div className="flex justify-between overflow-x-hidden overflow-y-hidden">
      <Sidebar />
      <div className="w-full min-h-screen bg-[#2e3442]">
        <div className="w-full flex justify-end h-14 px-2 border-b border-b-[#787e92]  items-center sticky top-0 bg-[#10141E] z-50">
          <NavLink
            to="/dashboard/profile"
            className="w-[10vw]  flex gap-3 text-[1.4vw]  hover:text-white mt-3 px-4 py-3 rounded-md duration-300 text-zinc-400 sm:text-[1.5vw]"
          >
            <CgProfile className="mt-1" /> Profile
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
