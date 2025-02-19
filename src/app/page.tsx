"use client";
import CarouselSection from "@/components/CarouselSection";
import NavMenu from "@/components/Header/NavMenu";
import HeroBanner from "@/components/HeroBanner";
import ImageCard from "@/components/ImageCard";
import Review from "@/components/Review";
import Image from "next/image";
import {
  banner1,
  banner2,
  imageItems,
  imageItems2,
  sliderData,
  sliderData2,
} from "@/utils/constant";
import clsx from "clsx";
export default function Page() {
  return (
    <main className="pt-[100px]">
      <div className="w-full md:block hidden">
        <NavMenu />
      </div>
      <div className="space-y-4 xl:space-y-6">
        <HeroBanner
          data={banner1[0]}
          imgClass="w-[100vw] h-[30vh] xl:h-[40vh] object-cover bg-no-repeat bg-center bg-cover"
        />
        <section className="w-full grid place-items-center p-4 mx-auto ">
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
                imageClass={""}
              />
            ))}
          </div>
        </section>
        <CarouselSection
          sliderData={sliderData}
          title=""
          imgClass="h-[75px] w-[75px] xl:h-[140px]  xl:w-[140px] bg-gray-300 hover:bg-gray-200 object-contain rounded-full img-hover-magnify"
        />
        <HeroBanner
          data={banner2[0]}
          imgClass="w-[100vw] h-[30vh] xl:h-[40vh] object-cover bg-no-repeat bg-center bg-cover"
        />
        <CarouselSection
          sliderData={sliderData2}
          title="Carousel with SKU-products"
          imgClass="h-[75px] xl:h-[100px] object-contain img-hover-magnify"
        />
        <section className="w-full grid place-items-center mx-auto">
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
                imageClass={""}
              />
            ))}
          </div>
        </section>

        <Review />
      </div>
    </main>
  );
}

// import Image from "next/image";
// import CarouselSize from "./_components/Carousel";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <CarouselSize />
//       </main>
//     </div>
//   );
// }
