import React from "react";
import Image from "next/image";

interface BannerProps {
  data: {
    id: string;
    img: string;
    alt: string;
  };
  imgClass: string;
}

const HeroBanner = ({ data, imgClass }: BannerProps) => {
  return (
    <Image
      src={data.img}
      width={1200}
      height={250}
      alt={data.alt}
      className={imgClass}
    />
  );
};

export default HeroBanner;
