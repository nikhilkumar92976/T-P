import React, { useRef, useState } from "react";
import Sidebar from "./student_dashboard_pages/Sidebar";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { GraduationCap, Menu, MoonIcon, SunIcon } from "lucide-react";
import ToggleSwitch from "../../component/ToggleSwitch";
function Dashboard() {
  const [openBar, setOpenBar] = useState(false);
  const [rightWidth, setRightWidth] = useState(400); // initial width in px
  const resizerRef = useRef(null);
  const isDragging = useRef(false);

  const startDragging = () => {
    isDragging.current = true;
    document.body.classList.add("select-none");
  };

  const stopDragging = () => {
    isDragging.current = false;
    document.body.classList.remove("select-none");
  };

  const onDrag = (e) => {
    if (!isDragging.current) return;
    const minWidth = 200;
    const maxWidth = 400;
    const newWidth = Math.max(minWidth, Math.min(maxWidth, e.clientX));
    setRightWidth(newWidth);
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", onDrag);
    window.addEventListener("mouseup", stopDragging);
    return () => {
      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("mouseup", stopDragging);
    };
  }, []);
  const ToggleBar = () => {
    setOpenBar(!openBar);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Header (fixed top) */}
      
        <div className="hidden w-full h-14 px-10 border-b border-b-[#787e92] md:flex justify-between items-center sticky top-0 bg-primary-0 z-50">
          <NavLink to="/" className="flex items-center space-x-2">
            <GraduationCap size={32} className="text-primary-600" />
            <span className="text-2xl font-bold text-primary-900">T&P</span>
          </NavLink>
          <div className="w-28 sm:w-36  flex justify-around items-center ">
            <ToggleSwitch />
            <NavLink
              to="/dashboard/profile"
              className="flex pb-1 items-center  rounded-md duration-300 text-zinc-400 sm:text-[1.5vw]"
            >
              <CgProfile className="mt-1" />
            </NavLink>
          </div>
        </div>

      {/* Main Content Area */}
      <div className=" h-full flex justify-between space-x-1 bg-gray-200">
        {/* Sidebar (fixed left) */}
          <Menu
          onClick={ToggleBar}
          className={`cursor-pointer transform transition-transform duration-300 ease-in-out ${
            openBar ? "rotate-90 text-primary-600" : "rotate-0 text-primary-400"
          }`}
        />
        <Sidebar style={{ width: rightWidth }}/>
        <div
          id="resizer bar"
          ref={resizerRef}
          onMouseDown={startDragging}
          className="w-[2px] hover:bg-blue-400 cursor-ew-resize"
        ></div>

        {/* Scrollable Outlet */}
        <main className="flex-1 bg-gray-50 p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
