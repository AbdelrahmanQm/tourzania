import React from "react";
import ShortCutCard from "./ShortCutCard";
import Image from "next/image";
import worldMap from "../../../public/img/world-map.png";
import shortCutsData from "../appData/shortCutsData";

const ShortCutsMain: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-[150px] bg-graybg px-4 py-24 relative overflow-hidden">
      <Image
        src={worldMap}
        alt="world map"
        objectFit="cover"
        className="absolute left-0 top-0 opacity-15"
      />

      <h2 className="font-bold text-3xl">Top Categories</h2>
      <div className="flex gap-12 mt-12">
        {shortCutsData.map((shortcut, index) => {
          return (
            <ShortCutCard
              key={index}
              name={shortcut.name}
              image={shortcut.image}
              link={shortcut.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShortCutsMain;
