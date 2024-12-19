import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import TrendingList from "./TrendingList";
import { fetchData } from "../Utils/httpRequest";

export default function Trending() {
  const [coinTrending, setCoinTrending] = useState([]);
  useEffect(() => {
    const fetchTrending = async () => {
      const data = await fetchData("/search/trending");
      setCoinTrending(data.coins);
    };
    fetchTrending();
  }, []);
  return (
    <div className="bg-[#111111] max-w-screen m-4 px-4 pt-4 flex flex-col gap-3 rounded-md">
      <div className="flex justify-between items-center">
        <p className="text-[#E0E0E0] text-sm font-semibold">New and Trending</p>
        <div className="flex text-[#E0E0E0] gap-2">
          <div className="flex justify-center items-center bg-[#1D2025] p-2 rounded-full text-xs">
            <FaAngleLeft />
          </div>
          <div className="flex justify-center items-center bg-[#1D2025] p-2 rounded-full text-xs">
            <FaAngleRight />
          </div>
        </div>
      </div>
      <div className="grid gap-3 grid-rows-1 grid-flow-col">
        {coinTrending.length > 0 &&
          coinTrending.map(
            (trending, index) =>
              index < 5 && (
                <TrendingList key={trending.item.id} trending={trending} />
              )
          )}
      </div>
    </div>
  );
}
