import { category } from "../constants/constants";
import { FaAngleDown } from "react-icons/fa6";
import CoinSearch from "./CoinSearch";

export default function CoinHeader() {
  return (
    <div className="flex items-center justify-between pb-4">
      <div className="flex items-center gap-6">
        <p className="font-bold text-[#b3b6bd]">Popular dapps</p>
        <CoinSearch />
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
  );
}
