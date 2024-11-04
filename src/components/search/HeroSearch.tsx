import React, { useEffect, useState } from "react";
import { CalendarIcon, SearchIcon } from "../../../public/svgs/page";

const HeroSearch: React.FC = () => {
  const [offsetY, setOffsetY] = useState<number>(0);
  const handleScroll = () => {
    setOffsetY(window.scrollY < 630 ? window.scrollY : 630);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div
      className="h-[110px] w-[1000px] bg-white shadow-xl rounded-xl flex items-center justify-between px-8"
      style={{ transform: `scale(${offsetY * 0.0003 + 1})` }}
    >
      <div className="flex items-center gap-2 h-full  ">
        <SearchIcon className="text-4xl text-lightgreen" />
        <div className="flex flex-col">
          <p className="font-bold">Search</p>
          <input
            type="text"
            name="search"
            placeholder="Tour, Place, City or Category"
            className="border-b-2 focus:outline-none w-[300px]"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 h-full  ">
        <CalendarIcon className="text-4xl text-lightgreen" />
        <div className="flex flex-col">
          <p className="font-bold">Your Dates</p>
          <input
            type="text"
            name="search"
            placeholder="Tour, Place, City or Category"
            className="border-b-2 focus:outline-none w-[300px]"
          />
        </div>
      </div>
      <button className="px-8 py-4 font-bold rounded-md bg-lightgreen text-white hover:bg-lightestgreen transition-all duration-500 ">
        Search
      </button>
    </div>
  );
};

export default HeroSearch;
