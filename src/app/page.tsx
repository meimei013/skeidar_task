"use client";
import CarouselSection from "@/components/CarouselSection";
import NavMenu from "@/components/Header/NavMenu";
import HeroBanner from "@/components/HeroBanner";
import ImageCard from "@/components/ImageCard";
import Review from "@/components/Review";
import {
  banner,
  imageItems,
  imageItems2,
  sliderData,
  sliderData2,
} from "@/utils/constant";
import clsx from "clsx";
export default function Page() {
  return (
    <main className="main-div-layout xl:pt-[100px]">
      <div className="w-full md:block hidden">
        <NavMenu />
      </div>
      <div className="space-y-2 xl:space-y-6">
        <HeroBanner data={banner[0]} imgClass="hero-banner" />
        <section className="section-grid p-4">
          <div
            className={clsx(
              "grid grid-cols-2 gap-4",
              (imageItems.length == 3 && "xl:grid-cols-3") ||
                (imageItems.length >= 4 && "xl:grid-cols-4")
            )}
          >
            {imageItems.map((item, index) => (
              <ImageCard
                key={index}
                img={item.img}
                title={item.title}
                price={item.price}
                link={item.link}
                imageClass={"img-hover-magnify"}
              />
            ))}
          </div>
        </section>
        <CarouselSection
          sliderData={sliderData}
          title=""
          imgClass="carouse-circle bg-orange-50 hover:bg-orange-100 object-contain img-hover-magnify"
        />
        <HeroBanner data={banner[0]} imgClass="hero-banner" />
        <CarouselSection
          sliderData={sliderData2}
          title="Carousel with SKU-products"
          imgClass="h-[75px] md:h-[100px] object-contain img-hover-magnify"
        />
        <section className="section-grid">
          <div
            className={clsx(
              "grid grid-cols-3 gap-4",
              imageItems2.length >= 4 && "xl:grid-cols-4"
            )}
          >
            {imageItems2.map((item, index) => (
              <ImageCard
                key={index}
                img={item.img}
                title={item.title}
                price={item.price}
                link={item.link}
                imageClass={"img-hover-magnify"}
              />
            ))}
          </div>
        </section>

        <Review />
      </div>
    </main>
  );
}
