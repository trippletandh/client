import Rating from "../../../components/common/Rating";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TopratedProducts = () => {
  return (
    <div className="mt-8 lg:mt-16">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Layout */}
        <div className="">
          {/* Title */}
          <div className="text-center lg:flex items-center justify-center lg:gap-20">
            <div className="">
              <h3 className="text-[#212529] text-lg font-bold mb-4 lg:text-4xl">
                Toprated Products
              </h3>
              <p className="text-xs lg:text-lg">
                Interesting Features Is Rich And Colorful, Each Button To Bring
                A Surprise To The Baby Introduction To Give <br /> Your Child
                Learn In Advance.
              </p>
            </div>
            <div className="hidden xl:block  xl:-mr-[200px]">
              <div className="lg:flex gap-4 items-center justify-center">
                <button className="border-2 p-3 rounded-md hover:bg-[#212529] hover:text-white transition-all">
                  <IoIosArrowBack />
                </button>
                <button className="border-2 p-3 rounded-md hover:bg-[#212529] hover:text-white transition-all">
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
          {/* Cards */}
          <div className="grid grid-cols-2 gap-4 pt-4 lg:grid-cols-4">
            <div className="">
              <img
                className="rounded-t-md"
                src="https://cdn.shopify.com/s/files/1/0623/7578/8783/products/16_600x.jpg?v=1644400827"
                alt=""
              />
              <div className="text-center bg-gray-200 p-4 rounded-b-md">
                <h4 className="pb-2">Mastela 5 in 1 Rocket</h4>
                <p className="pb-2">$900.00</p>
                <Rating rating={5} />
              </div>
            </div>

            <div className="">
              <img
                className="rounded-t-md"
                src="https://cdn.shopify.com/s/files/1/0623/7578/8783/products/7_493x.jpg?v=1644400528"
                alt=""
              />
              <div className="text-center bg-gray-200 p-4 rounded-b-md">
                <h4 className="pb-2">Mastela 5 in 1 Rocket</h4>
                <p className="pb-2">$900.00</p>
                <Rating rating={5} />
              </div>
            </div>

            <div className="hidden md:block">
              <img
                className="rounded-t-md"
                src="https://cdn.shopify.com/s/files/1/0623/7578/8783/products/26_493x.jpg?v=1644402525"
                alt=""
              />
              <div className="text-center bg-gray-200 p-4 rounded-b-md">
                <h4 className="pb-2">Mastela 5 in 1 Rocket</h4>
                <p className="pb-2">$900.00</p>
                <Rating rating={5} />
              </div>
            </div>

            <div className="hidden md:block">
              <img
                className="rounded-t-md"
                src="https://cdn.shopify.com/s/files/1/0623/7578/8783/products/5_493x.jpg?v=1644402251"
                alt=""
              />
              <div className="text-center bg-gray-200 p-4 rounded-b-md">
                <h4 className="pb-2">Mastela 5 in 1 Rocket</h4>
                <p className="pb-2">$900.00</p>
                <Rating rating={5} />
              </div>
            </div>
          </div>
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
      </div>
    </div>
  );
};

export default TopratedProducts;
