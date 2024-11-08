import React from "react";
import Attraction from "./Attraction";
import topAttractions from "../appData/topAttractions";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const TopAttractionsMain: React.FC = () => {
  return (
    <div className="max-w-[1250px] mx-auto px-4 pt-44">
      <div className="flex flex-col items-center mb-12">
        <h2 className="font-bold text-3xl text-section ">Top Attractions</h2>
      </div>

      <ScrollArea className="w-full whitespace-nowrap rounded-md lg:max-w-[1250px] mx-auto">
        <div className="flex w-max lg:space-x-0 lg:p-0 sm:space-x-4 sm:p-4">
          <div className="grid grid-cols-4 gap-8">
            {topAttractions.map((attraction, index) => {
              return (
                <Attraction
                  key={index}
                  name={attraction.name}
                  tours={attraction.tours}
                  image={attraction.image}
                />
              );
            })}
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default TopAttractionsMain;
