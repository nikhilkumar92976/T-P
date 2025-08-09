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
    <div className="md:flex justify-around items-center py-4 px-8 bg-white rounded-lg shadow-sm border border-gray-100">
  {/* Left Image Section */}
  <div
    id="left"
    className="md:w-1/4 flex justify-center items-center mb-4 md:mb-0 md:pr-8 md:border-r border-primary-300"
  >
    <img
      src={userImage}
      alt="user"
      className="max-w-52 min-w-32 max-h-52 min-h-40 object-cover border rounded-xl"
    />
  </div>

  {/* Right Info Section */}
  <div
    id="details"
    className="grid grid-cols-2 gap-x-6 gap-y-4 text-md md:pl-8"
  >
    {Object.entries(info).map(([key, val]) => (
      <div key={key} className="flex space-x-2">
        <span className="text-primary-600 font-medium">{key}:</span>
        <span className="text-primary-500">{val}</span>
      </div>
    ))}
  </div>
</div>

  );
};

export default UserBLock;
