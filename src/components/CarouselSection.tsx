import CarouselItemCard from "./CarouselItemCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const CarouselSection = ({
  sliderData,
  title,
  imgClass,
}: {
  sliderData: {
    price: string;
    img: string;
    alt: string;
    title?: string;
    discounted?: string;
    link?: string;
    linkLabel?: string;
  }[];
  title?: string;
  imgClass?: string;
}) => (
  <section className="flex flex-col items-center justify-center w-full">
    {title && <h2 className="text-lg font-semibold py-2">{title}</h2>}
    <Carousel
      opts={{ align: "start", loop: true }}
      className="max-w-[300px] xl:max-w-[900px]"
    >
      <CarouselContent className="sm:-ml-4">
        {sliderData.map((data, index) => (
          <CarouselItem key={index} className="basis-1/3 xl:basis-1/4">
            <CarouselItemCard
              img={data.img}
              price={data.price}
              title={data.title ? data.title : null}
              link={data.link ? data.link : null}
              linkLabel={data.linkLabel ? data.linkLabel : null}
              discounted={data.discounted ? data.discounted : null}
              imageStyle={imgClass}
              alt={data.alt}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </section>
);

export default CarouselSection;
