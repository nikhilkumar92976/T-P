import { FaAngleRight } from "react-icons/fa6";

import React, { useState } from "react";

const MenuBar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="">
      <h3>hindi</h3>
    </div>

  );
};

export default MenuBar;
