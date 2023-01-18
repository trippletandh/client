import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import FormCheckOut from "./FormCheckOut";
import SidebarCheckOut from "./SidebarCheckOut";

const CheckOut = () => {
  return (
    <section>
      {/* container */}
      <div className="">
        {/* layout */}
        <div className="lg:grid lg:grid-cols-5">
          {/* Sidebar */}
          <SidebarCheckOut />

          {/* main */}
          <div className="max-w-screen-sm mx-auto lg:row-start-1 lg:col-span-3 lg:mx-20">
            <div className="flex items-center gap-2 mt-4 text-xs max-w-screen-sm mx-auto">
              <p>Cart</p>
              <HiChevronRight />
              <p className="font-bold">Information</p>
              <HiChevronRight />
              <p>Shipping</p>
              <HiChevronRight />
              <p>Payment</p>
              <HiChevronRight />
            </div>
            <h3 className="flex justify-between items-center my-6 lg:text-lg">
              Contact information
              <span className="lg:text-sm">
                Already have an account? Log in
              </span>
            </h3>
            {/* Form */}
            <FormCheckOut />
            {/* Selection */}
            <div className="mb-4 flex gap-1">
              <select
                name="city"
                id="city"
                className="w-1/3 border rounded p-2"
              >
                <option value="">City</option>
                <option value="">Ho Chi Minh</option>
                <option value="">Ha Noi</option>
                <option value="">Da Nang</option>
                <option value="">An Giang</option>
                <option value="">Hue</option>
              </select>
              <select name="" id="" className="w-1/3 border rounded p-2">
                <option value="">District</option>
                <option value="">District 1</option>
                <option value="">District 2</option>
                <option value="">District 3</option>
                <option value="">District 4</option>
              </select>
              <select name="" id="" className="w-1/3 border rounded p-2">
                <option value="">Ward</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </div>
            <div>
              <p className="mb-4">Delivery method</p>
              <div className="border rounded text-center py-5">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgiIGhlaWdodD0iODUiIHZpZXdCb3g9IjAgMCAxMDggODUiPjxnIHN0cm9rZT0iI0IyQjJCMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0xIDE4aDEwNk0xMSA3MC4zaDI2bS0yNi02aDI2bS0yNi02aDE3Ii8+PC9nPjxwYXRoIHN0cm9rZT0iI0IyQjJCMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xIDE4bDEwLjctMTdoODQuN2wxMC42IDE3djYxLjVjMCAyLjUtMiA0LjUtNC41IDQuNWgtOTdjLTIuNSAwLTQuNS0yLTQuNS00LjV2LTYxLjV6TTU0IDF2MTYuNiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg=="
                  className="mx-auto mb-2"
                />
                <p>Please choose the city</p>
              </div>
            </div>
            <div className="my-4">
              <p className="mb-4">Payment Method</p>
              <div className="border rounded flex gap-2 items-center py-3">
                <input type="radio" className="ml-5" />
                <img
                  src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=4"
                  alt=""
                />
                <p>Cash on Delivery(COD)</p>
              </div>
            </div>
            <div className="max-w-screen-sm mx-auto my-11 pb-5 md:flex justify-between items-center ">
              <a
                href=""
                className="flex justify-center items-center text-md py-3"
              >
                <HiChevronLeft size={30} />
                Return to cart
              </a>
              <button className="w-full text-sm font-medium text-white border rounded-md bg-[#3d405d] px-8 py-5 mb-2 md:w-1/3 lg:px-0 lg:w-2/5">
                Continue to shipping
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
