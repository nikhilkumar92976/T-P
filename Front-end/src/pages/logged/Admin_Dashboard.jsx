import React, { useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Admin_dashboard_pages/Header";
import Sidebar from "./Admin_dashboard_pages/Sidebar";

function Admin_Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

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
    const minWidth = 265;
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
    <div className="h-screen bg-gray-50 flex relative overflow-hidden">
      {/* Sidebar */}
      <div
        className="relative z-10 h-full hidden lg:block"
        style={{ width: rightWidth }}
      >
        <Sidebar />
        <div
          ref={resizerRef}
          onMouseDown={startDragging}
          className="absolute top-0 right-0 w-[4px] h-full cursor-ew-resize bg-transparent hover:bg-blue-400 transition-colors"
        />
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header onMenuToggle={handleMenuToggle} />
        <main className="flex-1 p-4 lg:p-6 overflow-y-auto">
           <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
}

export default Admin_Dashboard;
