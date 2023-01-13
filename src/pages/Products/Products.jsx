import React, { useState } from "react";
import ColumnDisplayIcon from "../../components/common/icons/ColumnDisplayIcon";
import FilterIcon from "../../components/common/icons/FilterIcon";
import RowDisplayIcon from "../../components/common/icons/RowDisplayIcon";
import ProductCard from "./ProductCard";
import ProductCardRow from "./ProductCardRow";
import ProductsList from "./ProductList";

const Products = () => {
  const [display, setDisplay] = useState(true);
  const Headbar = () => {
    return (
      <div>
        {/* Container */}
        <div className="mt-6 py-2 px-3 lg:py-3 flex justify-between border border-gray-200 rounded-lg">
          {/* Layout */}
          <div className="flex gap-3">
            {/* display */}
            <button
              onClick={() => {
                setDisplay(true);
              }}
              className={`${display ? "bg-sky-500/30 rounded-md" : ""}`}
            >
              <ColumnDisplayIcon />
            </button>
            <button
              onClick={() => {
                setDisplay(false);
              }}
              className={`${!display ? "bg-sky-500/30 rounded-md" : ""}`}
            >
              <RowDisplayIcon />
            </button>
          </div>
          <div>
            {/* Filter */}
            <button className="flex gap-2 px-3 items-center md:hidden">
              <FilterIcon />
              <p>Fiter and sort</p>
            </button>
          </div>
          <div className="hidden md:flex gap-2 items-center">
            {/* Sort by */}
            <p>Sort by:</p>
            <select
              name="Sorting"
              defaultValue="default"
              className="select select-bordered border rounded-lg p-1"
            >
              <option value="default" disabled>
                Choose your option
              </option>
              <option value="lowtohigh">Price: low to high</option>
              <option value="hightolow">Price: high to low</option>
            </select>
          </div>
        </div>
      </div>
    );
  };
  const ProductGrid = () => {
    return (
      <>
        <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {/* Container */}
          {ProductsList.map((item) => {
            if (display === true) {
              return (
                <ProductCard
                  key={item.id}
                  title={item.title}
                  imageUrl={item.imageUrl}
                  price={item.price}
                />
              );
            }
          })}
        </div>
        <div>
          {ProductsList.map((item) => {
            if (display === false) {
              return (
                <ProductCardRow
                  key={item.id}
                  title={item.title}
                  imageUrl={item.imageUrl}
                  price={item.price}
                  description={item.description}
                />
              );
            }
          })}
        </div>
      </>
    );
  };

  return (
    <div className="mt-8 lg:mt-16">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Layout */}
        <h3 className="text-[#212529] text-2xl font-bold mb-4 lg:text-4xl text-center">
          Products
        </h3>
        <div className="flex gap-10">
          {/* Title */}
          <div className="">
            <div>
              <Headbar />
            </div>
            <ProductGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
