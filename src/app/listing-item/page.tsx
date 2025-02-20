import { imageItems, products } from "@/utils/constant";
import clsx from "clsx";
import ProductCard from "./_components/ProductCard";
import { FilterComp } from "./_components/Filter";
import { SortComp } from "./_components/Sort";
import Marquee from "@/components/Marquee";

export default function ListingItem() {
  return (
    <main className="main-div-layout xl:pt-[100px]">
      <div className="text-gray-400 py-4 xl:py-8 px-4">
        Home | <span className="text-gray-800">All Products</span>
      </div>
      <div className="flex px-4 py-2 justify-between items-center">
        <div className="filter-sort-layout">
          <FilterComp />
        </div>
        <div className="filter-sort-layout">
          <SortComp />
        </div>
      </div>
      <section className="w-full grid place-items-center p-4 mx-auto ">
        <div
          className={clsx(
            "grid grid-cols-2 gap-4",
            (imageItems.length == 3 && "xl:grid-cols-3") ||
              (imageItems.length >= 4 && "xl:grid-cols-4")
          )}
        >
          {products.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              name={item.name}
              type={item.type}
              price={item.price}
              sale={item.sale}
              status={item.status}
              discounted={item.discounted}
              link={item.link}
              imageClass={"img-hover-magnify"}
            />
          ))}
        </div>
      </section>
      <Marquee message={"Sales end at 23:04:22"} bgColor="bg-red-500" />
    </main>
  );
}
