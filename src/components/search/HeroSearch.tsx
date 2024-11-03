import React, { useEffect, useState } from "react";

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
    ></div>
  );
};

export default HeroSearch;
