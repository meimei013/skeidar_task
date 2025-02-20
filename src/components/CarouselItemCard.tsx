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
        width={200}
        height={200}
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
            <span className="text-xs xl:text-sm block xl:inline-block line-through text-gray-400">
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
    </div>
  </CardContent>
);

export default CarouselItemCard;
