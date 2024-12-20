import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { fetchData } from "../Utils/httpRequest";

export default function CoinFooter({ page, setPage, perPage, setPerPage }) {
  const [endPage, setEndPage] = useState(1);
  useEffect(() => {
    const fetch = async () => {
      const data = await fetchData("coins/markets?vs_currency=usd");
      setEndPage(Math.ceil(data.length / perPage));
    };
    fetch();
  }, [perPage]);
  const clickHandler = (e) => {
    setPerPage(e.target.value);
  };
  return (
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
          className={page === 1 && "text-slate-500"}
        />
        <FaAngleRight
          onClick={() => page < endPage && setPage((prev) => prev + 1)}
          className={page >= endPage && "text-slate-500"}
        />
      </div>
    </div>
  );
}
