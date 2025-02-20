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
      <div className="card-title">{title}</div>
      <span className="card-link">{link}</span>
    </div>
  </div>
);

export default ImageCard;
