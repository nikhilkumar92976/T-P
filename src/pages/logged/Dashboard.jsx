import React from "react";
import Header from "../../components/header";
import Sidebar from "../../components/Sidebar";
import Maincontent from "../../components/Maincontent";

const Dashboard = () => {
  return (
    <div className="h-full w-full flex flex-col bg-gray-100">
      <Header />
      <div id="page" className="flex flex-1 overflow-hidden">
        <Sidebar/>
        <Maincontent/>
      </div>
    </div>
  );
};

export default Dashboard;
