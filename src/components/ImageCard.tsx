import React from "react";
import Image from "next/image";

const ImageCard = ({
  img,
  title,
  price,
  link,
  imageClass,
}: {
  img: string;
  title: string;
  price: string;
  link: string;
  imageClass: string;
}) => (
  <div>
    <Image
      src={img}
      width={"300"}
      height={"300"}
      alt={title}
      className={imageClass}
    />
    <div className="text-center mt-2">
      <div className="text-base text-gray-600 xl:text-lg">{title}</div>
      <span className="text-xs text-gray-400 xl:text-sm underline block">
        {link}
      </span>
    </div>
  </div>
);

export default ImageCard;
