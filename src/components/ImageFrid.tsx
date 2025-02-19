import ImageCard from "./ImageCard";

const ImageGrid = ({
  items,
  imageStyle,
}: {
  items: { img: string; title: string; link: string; price: string }[];
  imageStyle: string;
}) => (
  <section className="grid place-items-center mx-auto">
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <ImageCard
          key={index}
          img={item.img}
          title={item.title}
          price={item.price}
          link={item.link}
          imageClass={imageStyle}
        />
      ))}
    </div>
  </section>
);

export default ImageGrid;
