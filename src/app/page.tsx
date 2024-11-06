import React from "react";

import type { NextPage } from "next";
import HeroMain from "@/components/heroSection/HeroMain";
import FeaturesMain from "@/components/featuresSection/FeaturesMain";
import ShortCutsMain from "@/components/shortCutsSection/ShortCutsMain";

const Home: NextPage = () => {
  return (
    <div className="relative">
      <HeroMain />
      <FeaturesMain />
      <ShortCutsMain />
      <div className="h-[200vh]"></div>
    </div>
  );
};

export default Home;
