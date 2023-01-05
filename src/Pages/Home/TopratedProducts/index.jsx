import Rating from "../../../components/common/Rating";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductGrid from "./ProductGrid";

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
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default TopratedProducts;
