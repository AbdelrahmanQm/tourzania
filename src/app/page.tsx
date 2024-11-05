import React from "react";

import type { NextPage } from "next";
import HeroMain from "@/components/heroSection/HeroMain";
import FeaturesMain from "@/components/featuresSection/FeaturesMain";

const Home: NextPage = () => {
  return (
    <div className="relative">
      <HeroMain />
      <FeaturesMain />
      <div className="h-[200vh]"></div>
    </div>
  );
};

export default Home;
