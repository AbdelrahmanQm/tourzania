import React, { useEffect, useState } from "react";
import { SearchIcon } from "../../../public/svgs/page";

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
      className="h-[110px] w-[1000px] bg-white shadow-xl rounded-xl "
      style={{ transform: `scale(${offsetY * 0.0003 + 1})` }}
    >
      <div className="flex items-center gap-2 h-full px-4">
        <SearchIcon className="text-4xl" />
        <div className="flex flex-col">
          <p>Search</p>
          <input
            type="text"
            name="search"
            placeholder="Tour, Place, City or Category"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HeroSearch;
