import React, { useEffect, useState } from "react";
import SingleImage from "./SingleImage";
import heroImageOne from "../../../public/img/i-parallax-15.jpeg";
import heroImageTwo from "../../../public/img/i-parallax-20.jpeg";

const HeroImages: React.FC = () => {
  const [offsetY, setOffsetY] = useState<number>(0);
  const handleScroll = () => {
    setOffsetY(window.scrollY < 800 ? window.scrollY : 800);
    console.log(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className="flex gap-8">
      <div
        className={"translate-y-[" + 100 * 2 + "px]"}
        style={{ transform: `translateY(${offsetY * 0.15 + 50}px)` }}
      >
        <SingleImage image={heroImageOne} alt="image" />
      </div>
      <div
        className=" translate-y-52"
        style={{ transform: `translateY(${offsetY * -0.15 + 200}px)` }}
      >
        <SingleImage image={heroImageTwo} alt="image" />
      </div>
    </div>
  );
};

export default HeroImages;
