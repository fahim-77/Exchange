import React, { useEffect, useState } from "react";
import { fetchData } from "../Utils/httpRequest";
import CoinHeader from "./CoinHeader";
import CoinList from "./CoinList";
import CoinFooter from "./CoinFooter";
import Trending from "./Trending";

export default function Archive() {
  const [fetchCoin, setFetchCoin] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(8);

  useEffect(() => {
    const fetchCoins = async () => {
      const data = await fetchData(
        `coins/markets?vs_currency=usd&per_page=${perPage}&page=${page}`
      );
      setFetchCoin(data);
    };
    fetchCoins();
  }, [page, perPage]);

  return (
    <>
      <Trending />
      <div className=" min-h-[490px]  flex flex-col m-4 p-4 bg-[#111111] text-[#E0E0E0] relative">
        <CoinHeader />
        <div className="flex flex-col  font-semibold text-sm ">
          <div className="grid grid-cols-5 border-b-2 border-[#1D2025] px-2 py-1 ">
            <div>Rank</div>
            <div>Name</div>
            <div>Category</div>
            <div>Rating</div>
            <div>Networks</div>
          </div>
          {fetchCoin.length > 0 &&
            fetchCoin.map((coin, index) => (
              <CoinList
                key={coin.id}
                coin={coin}
                index={index}
                fetchCoin={fetchCoin}
                page={page}
                perPage={perPage}
              />
            ))}
        </div>
        <CoinFooter page={page} setPage={setPage} setPerPage={setPerPage} />
      </div>
    </>
  );
}
