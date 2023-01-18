import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const Show = () => {
  return (
    <div className="flex items-center">
      <p>Show order summary</p>
      <span>
        <HiChevronDown />
      </span>
    </div>
  );
};

const Hide = () => {
  return (
    <div className="flex items-center">
      <p>Hide order summary</p>
      <span>
        <HiChevronUp />
      </span>
    </div>
  );
};

const SidebarCheckOut = () => {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <div className="lg:bg-zinc-50 col-start-4 col-span-2 lg:border lg:border-r-0 lg:px-6">
        {/* header */}
        <div className=" bg-zinc-100 lg:hidden ">
          <div className="flex justify-between items-center max-w-screen-sm mx-auto">
            <div className="flex justify-between items-center gap-2 py-6 text-sm">
              <AiOutlineShoppingCart />
              <button onClick={() => setDisplay(!display)}>
                {display === true ? <Hide /> : <Show />}
              </button>
            </div>
            <span className="text-lg font-medium">$255</span>
          </div>
        </div>
        {/* content */}
        {display && (
          <div className="bg-zinc-50 ">
            <div className="max-w-screen-sm mx-auto flex gap-4 py-5 justify-between items-center">
              <div className="">
                <div className="absolute top-20 lg:top-2">
                  <button className=" relative left-12 top-16 z-10 border bg-zinc-500 text-white rounded-full px-2 ">
                    1
                  </button>
                  <img
                    className="relative border border-zinc-300 rounded-lg top-11"
                    src="https://cdn.shopify.com/s/files/1/0623/7578/8783/products/7_64x64.jpg?v=1644400528"
                  />
                </div>
                <div className="mt-2 ml-20 ">
                  <p className="text-sm md:text-base">
                    Babyhug Bear Face Rattle Cum Soft Toy
                  </p>

                  <p className="text-xs">Color: Yellow</p>
                </div>
              </div>

              <p className="text-sm my-3 ">$255.00</p>
            </div>
            {/* Horizontal line */}
            <div className="border-t-2 max-w-screen-sm mx-auto mt-8"></div>
            <div className="py-6 max-w-screen-sm mx-auto ">
              <p className="flex justify-between mb-4 ">
                Subtotal <span>$255</span>
              </p>
              <p className="flex justify-between max-w-screen-sm mx-auto">
                Shipping <span>$1</span>
              </p>
            </div>
            {/* Horizontal line */}
            <div className="border-t-2 max-w-screen-sm mx-auto"></div>
            <div className="py-5 max-w-screen-sm mx-auto ">
              <p className="flex justify-between items-center">
                Total <span>$255</span>
              </p>
            </div>
            {/* Horizontal line */}
            <div className="border-t-2 max-w-screen-sm mx-auto lg:hidden"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default SidebarCheckOut;
