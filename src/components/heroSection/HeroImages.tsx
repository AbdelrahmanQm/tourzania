import React, { useEffect, useState } from "react";
import SingleImage from "./SingleImage";
import heroImageOne from "../../../public/img/i-parallax-15.jpeg";
import heroImageTwo from "../../../public/img/i-parallax-20.jpeg";

const HeroImages: React.FC = () => {
  const [offsetY, setOffsetY] = useState<number>(0);
  const [imageOneOffset, setImageOneOffset] = useState<number>(
    window.innerWidth > 1150 ? 50 : 0
  );
  const [imageTwoOffset, setImageTwoOffset] = useState<number>(
    window.innerWidth > 1150 ? 200 : 0
  );
  const handleScroll = () => {
    if (window.innerWidth > 1150) {
      setOffsetY(window.scrollY < 800 ? window.scrollY : 800);
    } else {
      setImageOneOffset(0);
      setImageTwoOffset(0);
      setOffsetY(0);
    }
  };
  const handleResize = () => {
    if (window.innerWidth > 1150) {
      setImageOneOffset(50);
      setImageTwoOffset(200);
    } else {
      setImageOneOffset(0);
      setImageTwoOffset(0);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className="flex gap-8 w-full md:flex-row sm:flex-col">
      <div
        className="w-full"
        style={{
          transform: `translateY(${offsetY * 0.15 + imageOneOffset}px)`,
        }}
      >
        <SingleImage image={heroImageOne} alt="image" />
      </div>
      <div
        className="w-full"
        style={{
          transform: `translateY(${offsetY * -0.2 + imageTwoOffset}px)`,
        }}
      >
        <SingleImage image={heroImageTwo} alt="image" />
      </div>
    </div>
  );
};

export default HeroImages;
