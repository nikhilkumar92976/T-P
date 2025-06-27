import React, { useState } from "react";
import Sidebar from "./student_dashboard_pages/Sidebar";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { GraduationCap, MoonIcon, SunIcon } from "lucide-react";
import ToggleSwitch from "../../component/ToggleSwitch";
function Dashboard() {
 
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Header (fixed top) */}
      <div className="w-full h-14 px-10 border-b border-b-[#787e92] flex justify-between items-center sticky top-0 bg-primary-0 z-50">
        <NavLink to="/" className="flex items-center space-x-2">
          <GraduationCap size={32} className="text-primary-600" />
          <span className="text-2xl font-bold text-primary-900">T&P</span>
        </NavLink>
        <div className="w-28 sm:w-36  flex justify-around items-center ">
          <ToggleSwitch/> 
          <NavLink
            to="/dashboard/profile"
            className="flex pb-1 items-center  rounded-md duration-300 text-zinc-400 sm:text-[1.5vw]"
          >
            <CgProfile className="mt-1" />
          </NavLink>
        </div>
      </div>

      {/* Main Content Area */}
      <div className=" h-full flex justify-between  bg-gray-200">
        {/* Sidebar (fixed left) */}
        <Sidebar />

        {/* Scrollable Outlet */}
        <main className="flex-1 bg-gray-50 p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
