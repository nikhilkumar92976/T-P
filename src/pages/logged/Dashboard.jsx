import React from "react";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full min-h-screen bg-[#2e3442] ">
        <Outlet/>
      </div>
    </div>
  );
}

export default Dashboard;
