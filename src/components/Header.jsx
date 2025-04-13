import React, { useState } from "react";
import PlatformLogo from "./PlatformLogo";
import { CiLight } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
import logo  from '../assets/react.svg'
const Header = () => {
  const [theme,setTheme] = useState('Light');
  const handleTheme =()=>{
    let themeValue = theme=='Light'?'Dark':'Light';
    setTheme(themeValue)
  }
  return (
    <div className="w-screen h-14  px-8  border-2 border-red-400 flex justify-between items-center">
      <div id="left">
        <PlatformLogo size={1} />
      </div>
      <div  id="right"  className="w-2/12 flex list-none justify-around items-center"
      >
        <li className="flex" onClick={handleTheme}>
          {theme==='Light'?<CiLight size={36}/>:<MdLightMode  size={36}/>}
        </li>
        <li className=" border outline-sky-100 rounded-full">
         <img src={logo} alt="user image" />
        </li>
      </div>
    </div>
  );
};

export default Header;
