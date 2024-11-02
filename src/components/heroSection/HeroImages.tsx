import React from "react";
import SingleImage from "./SingleImage";
import heroImageOne from "../../../public/img/i-parallax-15.jpeg";
import heroImageTwo from "../../../public/img/i-parallax-20.jpeg";

const HeroImages: React.FC = () => {
  return (
    <div className="flex gap-8">
      <SingleImage image={heroImageOne} alt="image" />
      <SingleImage image={heroImageTwo} alt="image" />
    </div>
  );
};

export default HeroImages;
