import { FiSearch } from "react-icons/fi";

export default function CoinSearch() {
  return (
    <div className="bg-[#1D2025] flex items-center gap-2 py-1 px-2 rounded-full  w-64">
      <FiSearch className="text-[#E0E0E0] text-lg  " />
      <input
        type="text"
        placeholder="Search dapps..."
        className="bg-inherit pb-[2px]  placeholder:text-[#9E9E9E] placeholder:text-sm placeholder:font-semibold outline-none placeholder:leading-none placeholder:py-1"
      />
    </div>
  );
}
