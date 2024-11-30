"use client";

import { useState } from "react";

export default function Button() {
  // hook, event ke against ui ko update krna
  let [count, setcount] = useState(0); //returns array ik element hota hai jese yaha pr 0 hai  ik function aur jo function hota hai woh humari value hoti h
  console.log(count);

  const handleClick = () => {
    setcount(count + 1); //re-renders new value
  };

  const handleReset = () => {
    setcount(0); // reset back to 0
  };

  return (
    <div className="bg-[#4c8d0f5b] w-[81px] h-[59px] flex flex-col items-center justify-between">
      <p className="text-black w-[39px] flex text-sm bg-[#4c9ce2] rounded ml-1">
        {count}
      </p>

      <div className="flex space-x-2 mt-2">
        <button
          onClick={handleClick}
          className="bg-[#2f992f] w-[21px] h-[21px] px-1 py-1 rounded-full border mt-1 mb-1 border-white flex items-center justify-center text-center"
        >
          +
        </button>

        {/* Reset Button */}
        <button
          onClick={handleReset}
          className="bg-[#419641] w-[20px] h-[20px] px-1 py-1 rounded-full border mt-1 mb-1 border-white flex items-center justify-center text-[10px] text-center"
        >
          R
        </button>
      </div>
    </div>
  );
}