import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const CarouselItemCard = ({
  img,
  alt,
  price,
  title,
  link,
  linkLabel,
  discounted,
  imageStyle,
}: {
  img: string;
  alt: string;
  price: string;
  title?: string | null;
  link?: string | null;
  discounted?: string | null;
  linkLabel?: string | null;
  imageStyle?: string;
}) => (
  <CardContent className="flex items-center justify-center p-2">
    <div>
      <Image
        src={img}
        width={150}
        height={150}
        alt={alt}
        className={imageStyle}
      />
      <div className="text-center mt-2">
        {title && (
          <div className="text-base text-gray-600 xl:text-lg">{title}</div>
        )}
        {price && discounted && (
          <div className="xl:space-x-2">
            <span className="text-base text-gray-700 xl:text-lg font-semibold">
              {discounted}
            </span>{" "}
            <span className="text-sm block xl:inline-block line-through text-gray-400 xl:text-base">
              {price}
            </span>
          </div>
        )}
        {link && (
          <Link
            href={link}
            className="text-xs text-gray-400 xl:text-sm underline block"
          >
            {linkLabel}
          </Link>
        )}
      </div>
      {/* <div className="text-center">
          <div className="text-base xl:text-lg -mb-1 font-semibold">
            {price}
          </div>
          <span className="text-xs text-gray-400 underline xl:text-sm block">
            {link}
          </span>
        </div> */}
    </div>
  </CardContent>
);

export default CarouselItemCard;
