import { links } from "../constants/constants";
import { TfiBell } from "react-icons/tfi";
import { FiSearch } from "react-icons/fi";
import fahim from "/fahim.webp";

export default function Headers() {
  return (
    <div className="flex justify-between items-center bg-[#111111] min-h-14 px-6 rounded-t-lg">
      <div className="flex gap-12 items-center">
        <h2 className="text-white text-xl font-bold ">pulse</h2>
        {/* {links.map((link) => {
          const Component = link.name;
          return <Component key={link.id} />;
        })} */}
        <div className="flex gap-6 items-center text-[#9E9E9E] font-bold text-sm">
          {links.map((item) => {
            return <div key={item.id}>{item.name}</div>;
          })}
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="bg-[#1D2025] flex items-center gap-2 py-1 px-2 rounded-full  w-56">
          <FiSearch className="text-white text-lg" />
          <input
            type="text"
            className="bg-inherit pb-[1px] placeholder:text-[#9E9E9E] text-sm font-semibold outline-none"
            placeholder="Search for an assets..."
          />
        </div>
        <button className="bg-blue-700 rounded-full px-2 py-2 text-[#BDBDBD] text-sm font-bold ">
          Buy & Sell
        </button>
        <button className="bg-[#1D2025] text-[#BDBDBD] text-xs font-bold px-3 py-2 rounded-full ">
          Send & Receive
        </button>
        <div className="bg-[#1D2025] size-8 rounded-full flex justify-center items-center">
          <TfiBell className=" text-white stroke-1" />
        </div>
        <img src={fahim} className="size-9 rounded-full object-cover" />
      </div>
    </div>
  );
}
