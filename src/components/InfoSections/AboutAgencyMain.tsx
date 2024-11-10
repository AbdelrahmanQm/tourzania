import Image from "next/image";
import React from "react";
import jebelShams from "../../../public/img/temp/Billad-Sayt-Day-trip-4WD.jpg";
import mainData from "../appData/mainData";
const AboutAgencyMain: React.FC = () => {
  return (
    <div className="flex max-w-[1250px] px-4 mx-auto gap-24 items-center lg:flex-row xmd:flex-col w-full">
      <div className="flex-1">
        <h2 className="font-bold text-xl font-hand mb-4 text-lightgreen">
          {mainData.content.aboutAgency.subText}
        </h2>
        <h2 className="font-bold text-3xl text-section mb-4">
          {mainData.content.aboutAgency.mainText}
        </h2>
        <p className="text-lg text-lightergray">
          {mainData.content.aboutAgency.aboutText}
        </p>
      </div>
      <div className="flex-1 h-[400px] bg-yellow overflow-hidden rounded-l-full relative flex items-center">
        <Image src={jebelShams} alt="About Company" objectFit="fill" />
      </div>
    </div>
  );
};

export default AboutAgencyMain;
