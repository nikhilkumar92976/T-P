import React, { useState } from "react";

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]); // Default to the first option

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); // Update the selected option
    setIsOpen(false); // Close the dropdown
    if (onSelect) {
      onSelect(option); // Call the callback function if provided
    }
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="bg-[#6556CD] text-white px-4 py-2 rounded-md flex items-center justify-between w-full"
      >
        {selectedOption}
        <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;