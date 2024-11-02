import React from "react";
import HeroText from "./HeroText";
import HeroImages from "./HeroImages";
import Image from "next/image";
import worldMap from "../../../public/img/world-map.png";

const HeroMain: React.FC = () => {
  return (
    <div className="bg-graybg">
      <Image src={worldMap} fill alt="world map" className="opacity-15 " />
      <div className="max-w-[1250px] mx-auto flex items-center h-[100vh] gap-12">
        <HeroText />
        <HeroImages />
      </div>
    </div>
  );
};

export default HeroMain;
