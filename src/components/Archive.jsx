import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import TrendingList from "./TrendingList";
import { FiSearch } from "react-icons/fi";
import CoinList from "./CoinList";
import { FaAngleDown } from "react-icons/fa6";
import { fetchData } from "../Utils/httpRequest";
import { category } from "../constants/constants";

export default function Archive() {
  const [coinTrending, setCoinTrending] = useState([]);
  const [coinList, setCoinList] = useState([]);
  const [page, setPage] = useState(1);
  const [endPage, setEndPage] = useState(1);
  const [perPage, setPerPage] = useState(8);
  useEffect(() => {
    const fetch = async () => {
      const data = await fetchData("coins/markets?vs_currency=usd&per_page=8");
      setEndPage(Math.ceil(data.length / 8));
    };
    fetch();
  }, []);
  useEffect(() => {
    const fetchTrending = async () => {
      const data = await fetchData("/search/trending");
      setCoinTrending(data.coins);
    };
    fetchTrending();
  }, []);
  useEffect(() => {
    const fetchCoins = async () => {
      const data = await fetchData(
        `coins/markets?vs_currency=usd&per_page=${perPage}&page=${page}`
      );
      setCoinList(data);
    };
    fetchCoins();
  }, [page, perPage]);
  const clickHandler = (e) => {
    setPerPage(e.target.value);
  };
  return (
    <>
      <div className="bg-[#111111] max-w-screen m-4 px-4 pt-4 flex flex-col gap-3 rounded-md">
        <div className="flex justify-between items-center">
          <p className="text-[#E0E0E0] text-sm font-semibold">
            New and Trending
          </p>
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
      <div className=" min-h-[490px]  flex flex-col m-4 p-4 bg-[#111111] text-[#E0E0E0] relative">
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-6">
            <p className="font-semibold">Popular dapps</p>
            <div className="bg-[#1D2025] flex items-center gap-2 py-1 px-2 rounded-full  w-64">
              <FiSearch className="text-[#E0E0E0] text-sm font-semibold" />
              <input
                type="text"
                className="bg-inherit placeholder:text-[#9E9E9E] text-sm font-semibold"
                placeholder="Search for an assets..."
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#1D2025] text-[#9E9E9E] text-xs font-bold flex gap-7 py-2 px-3 rounded-full">
              <span className="text-[#E0E0E0]">All</span>
              {category.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
            <div className="w-32 relative grid grid-rows-1 grid-flow-col items-center bg-[#1D2025] pl-3 py-2 rounded-full">
              <select className="bg-transparent appearance-none border-none outline-none text-xs font-semibold">
                <option value="all networks">All networks</option>
              </select>
              <FaAngleDown className="w-4 absolute right-0 pointer-events-none font-bold text-xs -translate-x-3" />
            </div>
          </div>
        </div>
        <div className="flex flex-col  font-semibold text-sm ">
          <div className="grid grid-cols-5 border-b-2 border-[#1D2025] px-2 py-1 ">
            <div>Rank</div>
            <div>Name</div>
            <div>Category</div>
            <div>Rating</div>
            <div>Networks</div>
          </div>
          {coinList.length > 0 &&
            coinList.map((coin, index) => (
              <CoinList
                key={coin.id}
                coin={coin}
                index={index}
                coinList={coinList}
                page={page}
                perPage={perPage}
              />
            ))}
        </div>
        <div className="w-full grid grid-flow-col grid-rows-1 items-center justify-between mt-2 mb-4 pr-8 absolute bottom-0 ">
          <div className="text-[#E0E0E0]  grid grid-cols-2 items-center gap-2">
            <p className="leading-none ">Shows rows per page</p>
            <div className="relative grid grid-rows-1 grid-flow-col items-center pl-2 bg-[#1D2025] rounded-md  w-12">
              <select
                name=""
                id=""
                className="bg-transparent appearance-none border-none outline-none "
                onClick={(e) => clickHandler(e)}
              >
                <option value="8">8</option>
                <option value="6">6</option>
                <option value="4">4</option>
              </select>
              <FaAngleDown className="absolute right-0 pointer-events-none text-xs font-bold -translate-x-2" />
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <p>
              {page} of {endPage}
            </p>
            <FaAngleLeft
              onClick={() => page > 1 && setPage((prev) => prev - 1)}
            />
            <FaAngleRight onClick={() => setPage((prev) => prev + 1)} />
          </div>
        </div>
      </div>
    </>
  );
}
