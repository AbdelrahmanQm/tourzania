import React from "react";

import type { NextPage } from "next";
import HeroMain from "@/components/heroSection/HeroMain";

const Home: NextPage = () => {
  return (
    <div className="relative">
      <HeroMain />
      <div className="h-[200vh]"></div>
    </div>
  );
};

export default Home;
