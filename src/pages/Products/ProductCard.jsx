import EyeIcon from "../../components/common/icons/EyeIcon";
import Rating from "../../components/common/Rating";

const ProductCard = () => {
  return (
    <div>
      <section className="bg-gray-100 rounded-xl">
        <div>
          <a href="./ProductDetail">
            {/* image */}
            <span className="group relative">
              <div className="absolute flex-col z-10 lg:translate-x-20  lg:translate-y-7 xl:translate-y-7 xl:translate-x-12">
                <button className="hidden lg:group-hover:block lg:ml-[200px] xl:ml-64 border rounded p-0.5 shadow-md hover:bg-black hover:text-white">
                  <EyeIcon />
                </button>
                <button className="hidden lg:group-hover:block mt-32 xl:mt-56 lg:ml-10 xl:ml-20 border rounded-md px-4 py-2 shadow-md bg-white hover:bg-black hover:text-white">
                  Add To Cart
                </button>
              </div>
              <img
                src="https://cdn.shopify.com/s/files/1/0623/7578/8783/products/7.jpg?v=1644400528"
                alt="title"
                className="relative z-1 object-cover rounded-t-xl group"
              />
            </span>
          </a>
          <div className="flex gap-2 justify-center pt-4 mb-[10px]">
            <div className="flex gap-2.5">
              <button className="rounded-md p-4 shadow-sm border hover:border-black text-xs bg-yellow-200"></button>
              <button className="rounded-md p-4 shadow-sm border hover:border-black text-xs bg-emerald-700"></button>
              <button className="rounded-md p-4 shadow-sm border hover:border-black text-xs bg-gray-400"></button>
            </div>
          </div>
          <div className="leading-8 text-center">
            {/* Product info */}
            <div className="px-2">
              <h3 className="text-base lg:text-lg font-semibold pt-2">
                Babyhug Bear Face Rattle Cum Soft Toy
              </h3>
              <p className="text-base md:text-xl font-bold lg:text-2xl py-2 ">
                $300.00
              </p>
            </div>
            <div className="flex justify-center gap-1 text-sm">
              <Rating />
              <p>(0)</p>
            </div>
            <span>
              {/* button */}
              <div className="flex gap-3 justify-center pb-3">
                <button className="bg-[#212529] lg:hidden text-white py-1 px-4 rounded-md hover:bg-white hover:text-black transition duration-500 lg:px-6">
                  Add To Card
                </button>
              </div>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCard;
