import React from "react";

import type { NextPage } from "next";
import HeroMain from "@/components/heroSection/HeroMain";
import FeaturesMain from "@/components/featuresSection/FeaturesMain";
import ShortCutsMain from "@/components/shortCutsSection/ShortCutsMain";
import TopToursMain from "@/components/topToursSection/TopToursMain";

const Home: NextPage = () => {
  return (
    <div className="relative">
      <HeroMain />
      <FeaturesMain />
      <ShortCutsMain />
      <TopToursMain />
      <div className="h-[200vh]"></div>
    </div>
  );
};

export default Home;
