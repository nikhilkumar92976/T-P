import React from "react";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar (fixed left) */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 bg-[#2e3442]">
        {/* Header (fixed top) */}
        <div className="w-full h-14 px-2 border-b border-b-[#787e92] flex justify-end items-center sticky top-0 bg-[#10141E] z-50">
          <NavLink
            to="/dashboard/profile"
            className="flex gap-3 text-[1.4vw] hover:text-white px-4 py-3 rounded-md duration-300 text-zinc-400 sm:text-[1.5vw]"
          >
            <CgProfile className="mt-1" /> Profile
          </NavLink>
        </div>

        {/* Scrollable Outlet */}
        <div className="overflow-y-auto  p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

