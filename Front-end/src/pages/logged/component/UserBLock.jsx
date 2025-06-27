import React from "react";
import userImage from "../../../assets/Student.avif";
const UserBLock = () => {
  const info = {
    Usrename: "mr_adrs",
    Batch: "2022-2026",
    Ranking: "1753",
    RollNo: "0177AL221004",
    Rating: "⭐⭐⭐⭐",
    Course: "B.tech",
    Email: "adrshmishra018@gmail.com",
    Linkdin: "LinkdIn/Adarsh mishra",
    LeetCode: "leetcode/adrs",
    GfG: "gfg/adrs",
    GitHub: "github/MrAdrs",
  };
  return (
    <div className="flex justify-around items-center py-4 px-8  bg-white rounded-lg shadow-sm border border-gray-100">
      <div id="left" 
      className="w-auto pr-8  border-r border-primary-300">
        <img
          src={userImage}
          className="max-w-52 min-w-40 max-h-52 min-h-40 object-cover border rounded-xl "
          alt="user-image"
        />
      </div>
      <div id="details" className="grid grid-cols-2 grid-rows-3 gap-3 text-md ">
        {Object.entries(info).map(([key, val]) => (
          <div className="flex space-x-2">
            <div className="text-primary-600">{`${key}: `}</div>
            <div className="text-primary-500">{` ${val}`} </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserBLock;
