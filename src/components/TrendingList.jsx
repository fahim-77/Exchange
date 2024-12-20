import React from "react";
import { FaStar } from "react-icons/fa";

export default function Test({ trending }) {
  return (
    <div className="bg-[#1D2025] flex items-center gap-4 rounded-lg min-w-[219px] p-2 ">
      <img src={trending.item.small} alt="" className="size-9 rounded-full" />
      <div className="flex flex-col">
        <p className="text-[#E0E0E0] text-sm font-semibold">
          {trending.item.symbol}
        </p>
        <div className="flex items-center text-[#a0a0a8] gap-1 text-xs font-semibold">
          <p>{trending.item.data.price.toFixed(2)}</p>
          <div>|</div>
          <FaStar className="fill-yellow-500 text-xs" />
          <p>{(Math.random() * (5 - 3) + 3).toFixed(1)}</p>
        </div>
      </div>
    </div>
  );
}
