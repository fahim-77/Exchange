import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { ImGift } from "react-icons/im";

export default function CoinList({ coin, index, fetchCoin, page, perPage }) {
  return (
    <div className="grid grid-cols-5 gap-y-3 border-b-2 border-[#1D2025] items-center px-2 py-[5px] text-xs font-semibold">
      <div>{index + (page - 1) * perPage + 1}</div>
      <div className="flex items-center gap-2">
        <img src={coin.image} className="size-8 rounded-full" />
        <div className="flex flex-col justify-center gap-1 text-sm font-semibold ">
          <div className="text-base font-bold leading-none">{coin.symbol}</div>
          <div className="text-xs text-[#a0a0a8] leading-none">{coin.name}</div>
        </div>
      </div>
      <div className="after:content-['$'] after:ml-1">
        {coin["current_price"].toLocaleString()}
      </div>
      <div className="flex  items-center gap-1 ">
        <FaStar className="fill-yellow-500" />
        <div>{(Math.random() * (5 - 3) + 3).toFixed(1)}</div>
      </div>
      <div className="flex items-center -space-x-2">
        {fetchCoin.length > 0 &&
          fetchCoin.map((item, index) =>
            index < 3 ? (
              <img
                key={item.id}
                src={item.image}
                className="size-7 rounded-full bg-[#1D2025]"
              />
            ) : (
              index === fetchCoin.length - 1 && (
                <div
                  key={item.id}
                  className="size-[26px] rounded-full flex justify-center items-center bg-[#1D2025] text-white"
                >
                  +{index - 2}
                </div>
              )
            )
          )}
      </div>
    </div>
  );
}
