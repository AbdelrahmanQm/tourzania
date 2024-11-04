"use client";
import React from "react";
import HeroText from "./HeroText";
import HeroImages from "./HeroImages";
import Image from "next/image";
import worldMap from "../../../public/img/world-map.png";
import HeroSearch from "../search/HeroSearch";

const HeroMain: React.FC = () => {
  return (
    <div className="bg-graybg px-6 relative">
      <Image src={worldMap} fill alt="world map" className="opacity-15 " />
      <div className="max-w-[1250px] mx-auto flex items-center h-[100vh] gap-12 relative">
        <HeroText />
        <HeroImages />
        <div className=" absolute z-10 left-0 bottom-32">
          <HeroSearch />
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
