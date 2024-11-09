"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import partnersData from "../appData/partnersData";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Partner from "./Partner";

export default function PartnersSectionMain() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="max-w-[1250px] mx-auto">
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-5xl mx-auto" // Increased max-width to accommodate 3 items
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="">
          {partnersData.map((partner, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
              <div className="p-1">
                <Partner image={partner.image} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
