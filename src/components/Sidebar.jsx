import React, { useState } from "react";
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";
import { RiFileHistoryLine } from "react-icons/ri";
import { LuNotebookPen } from "react-icons/lu";
import { IoHome } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const handleOpenSidebar = () => {
    setOpen(!open);
  };
  return (
    <div className="h-full w-1/5 border-2 border-green-300">
      <div
        className=""
        onClick={() => {
          handleOpenSidebar;
        }}
      >
        {open ? <GoSidebarExpand className="text-3xl" 
        stroke='blue'/> : <GoSidebarCollapse className="text-3xl stroke-blue-400"/>}
      </div>
      <ul className="flex flex-col gap-6 px-6 py-6 text-gray-800 ">
        <li className="flex items-center gap-6 hover:text-blue-600 hover:cursor-pointer">
          <IoHome className="text-2xl" />{" "}
          <span className="text-xl font-medium">Home</span>
        </li>
        <li className="flex items-center gap-6 hover:text-blue-600 hover:cursor-pointer">
          <MdComputer className="text-2xl" />{" "}
          <span className="text-xl font-medium">Tests</span>
        </li>
        <li className="flex items-center gap-6 hover:text-blue-600 hover:cursor-pointer">
          {" "}
          <RiFileHistoryLine className="text-2xl" />{" "}
          <span className="text-xl font-medium">History</span>
        </li>
        <li className="flex items-center gap-6 hover:text-blue-600 hover:cursor-pointer">
          <LuNotebookPen className="text-2xl" />{" "}
          <span className="text-xl font-medium">Prepration</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
