import React from "react";
import Image from "next/image";
import Link from "next/link";
import BadgeColor from "./BadgeColor";

interface ProductImage {
  id: string;
  path: string;
  alt: string;
}

interface Product {
  name: string;
  type: string;
  price: string;
  discounted: string;
  sale: string[];
  status: string;
  link: string;
  img: ProductImage;
  imageClass: string;
}

const ProductCard = ({
  img,
  name,
  type,
  price,
  link,
  discounted,
  status,
  sale,
  imageClass,
}: Product) => (
  <div>
    <div className="relative">
      <Image
        src={img.path}
        width={"300"}
        height={"300"}
        alt={name}
        className={imageClass}
      />
      <div className="absolute top-[10px] text-xs left-0 bg-gray-100 px-3 py-1 xl:text-sm">
        {status}
      </div>
      <div className="absolute top-[10px] right-0 space-y-1">
        {sale.map((item, i) => (
          <div
            key={i}
            className="uppercase bg-orange-400 text-white px-3 py-1 text-xs xl:text-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
    <div className="text-left mt-2">
      <div className="text-base flex justify-between items-center text-gray-600 xl:text-lg">
        <div className="xl:text-lg text-base text-gray-700">{name}</div>
        <div className="text-sm text-gray-500">{type}</div>
      </div>
      <div className="space-x-2">
        <span className="text-base text-gray-700 xl:text-lg font-semibold">
          {discounted}
        </span>
        <span className="text-sm line-through text-gray-400 xl:text-base">
          {price}
        </span>
      </div>
      <div className="text-base flex justify-between items-center text-gray-600 xl:text-lg">
        <Link
          href={"#"}
          className="text-xs text-gray-400 xl:text-sm underline block"
        >
          {link}
        </Link>
        <BadgeColor />
      </div>
    </div>
  </div>
);

export default ProductCard;
