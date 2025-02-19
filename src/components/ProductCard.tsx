import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Circle } from "lucide-react";

interface ProductImage {
  id: string;
  path: string;
  alt: string;
}

interface Product {
  id: string;
  name: string;
  type: string;
  price: string;
  discounted: string;
  sale: string[];
  status: string;
  link: string;
  img: ProductImage;
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
}: {
  img: ProductImage;
  name: string;
  type: string;
  price: string;
  link: string;
  discounted: string;
  status: string;
  sale: string[];
  imageClass: string;
}) => (
  <div>
    <div className="relative">
      <Image
        src={img.path}
        width={"300"}
        height={"300"}
        alt={name}
        className={imageClass}
      />
      <div className="absolute top-[10px] left-0 bg-gray-100 px-3 py-1 text-sm">
        {status}
      </div>
      <div className="absolute top-[10px] right-0 space-y-1">
        {sale.map((item, i) => (
          <div
            key={i}
            className="uppercase bg-orange-600 text-white px-3 py-1 text-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
    <div className="text-left mt-2">
      <div className="text-base flex justify-between items-center text-gray-600 xl:text-lg">
        <div>{name}</div>
        <div>{type}</div>
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
          href={link}
          className="text-xs text-gray-400 xl:text-sm underline block"
        >
          {status}
        </Link>
        <div className="flex items-center justify-center gap-1">
          <Circle className="w-3 h-3 fill-slate-600" />
          <Circle className="w-3 h-3 fill-gray-400" />
          <Circle className="w-3 h-3 fill-orange-500" />
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;
