import { imageItems, products } from "@/utils/constant";
import clsx from "clsx";
import ProductCard from "./_components/ProductCard";
import { FilterComp } from "./_components/Filter";
import { SortComp } from "./_components/Sort";

export default function ListingItem() {
  return (
    <main className="xl:pt-[100px] pt-[80px]">
      <div className="text-gray-400 py-4 xl:py-8 px-4">
        Home | All Products | <span className="text-gray-800">Sofa</span>
      </div>
      <div className="flex px-4 py-2 justify-between items-center">
        <div className="flex gap-2 rounded bg-gray-200 px-4 py-2">
          <FilterComp />
        </div>
        <div className="flex gap-2 rounded bg-gray-200 px-4 py-2">
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
              imageClass={""}
            />
          ))}
        </div>
      </section>
      <div className="mt-6 -mb-4 xl:-mb-8 bg-red-600 uppercase text-center text-white py-2 w-full ">
        Sales end at 23:04:22
      </div>
    </main>
  );
}
