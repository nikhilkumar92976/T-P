import React from "react";

const PlatformLogo = ({
  gradient = "from-purple-500 via-pink-500 to-red-500",
  color = "",
  size =0,
}) => {
  const logoSize = size===0?`text-3xl`:`text-4xl`;

  if (color.trim() === "") {
    return (
      <div
        className={`flex items-center justify-center font-serif font-bold tracking-tighter text-transparent bg-clip-text ${logoSize} bg-gradient-to-r ${gradient}`}
      >
        <span>T</span>
        <span>&</span>
        <span>P</span>
      </div>
    );
  }

  const logoColor = `text-${color}`;

  return (
    <div
      className={`flex items-center justify-center font-serif font-bold tracking-tighter ${logoSize} ${logoColor}`}
    >
      <span>T</span>
      <span>&</span>
      <span>P</span>
    </div>
  );
};

export default PlatformLogo;
