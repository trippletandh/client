import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductCard from "./ProductCard";

const products = [
  {
    title: "Mastela 5 in 1 Rocket",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0623/7578/8783/products/16_600x.jpg?v=1644400827",
    price: "900.00",
  },
  {
    title: "Babyhug Bear Face",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0623/7578/8783/products/7_493x.jpg?v=1644400528",
    price: "300.00",
  },
  {
    title: "Skyloft Rabbit LED Night Lamp",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0623/7578/8783/products/26_493x.jpg?v=1644402525",
    price: "800.00",
  },
  {
    title: "Little Genius Steel Kitchen",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0623/7578/8783/products/5_493x.jpg?v=16444022517",
    price: "40.00",
  },
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 pt-4 lg:grid-cols-4">
      {/* Product Card */}
      {products.map((item) => {
        return (
          <ProductCard
            key={item}
            title={item.title}
            imageUrl={item.imageUrl}
            price={item.price}
          />
        );
      })}
      {/* Button */}
      <div className=" mt-10 flex gap-4 items-center justify-center xl:hidden">
        <button className="border-2 p-3 rounded-md hover:bg-[#212529] hover:text-white transition-all">
          <IoIosArrowBack />
        </button>
        <button className="border-2 p-3 rounded-md hover:bg-[#212529] hover:text-white transition-all">
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
