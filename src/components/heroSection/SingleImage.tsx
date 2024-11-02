import React from "react";
import Image, { StaticImageData } from "next/image";

type SingleImageProps = {
  image: StaticImageData;
  alt: string;
};

const SingleImage: React.FC<SingleImageProps> = ({ image, alt }) => {
  return (
    <div className="h-[675px] w-[350px] overflow-hidden bg-yellow relative rounded-full">
      <Image src={image} alt={alt} objectFit="cover" fill />
    </div>
  );
};

export default SingleImage;
