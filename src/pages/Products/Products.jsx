
import React, { useState } from "react";
import ColumnDisplayIcon from "../../components/common/icons/ColumnDisplayIcon";

import { useState } from "react";

import FilterIcon from "../../components/common/icons/FilterIcon";
import Pagination from "../../components/layouts/Pagination";
import ProductGrid from "./ProductGrid";
import ColumnDisplayIcon from "../../components/common/icons/ColumnDisplayIcon";
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

import GlobalSpinner from "../../components/common/GlobalSpinner"
import Loader from "../../components/common/Loader"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  sortNumbers,
  sortNames,
  paginate,
} from "../../services/productsService";

const Products = ({ user }) => {
  const [category, setCategory] = useState("all");
  const [sortType, setsortType] = useState("");
  const [page, setPage] = useState(1);
  const [display, setDisplay] = useState(true);
  const ITEMS_PER_PAGE = 8;

  const handleSelect = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  const handleSorting = (e) => {
    e.preventDefault();
    setsortType(e.target.value);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["products", { category: category }],
    queryFn: () => {
      setPage(1);
      return axios.get("/products", {
        params: category !== "all" && { category: category },
      });
    },
    cacheTime: 5 * 60 * 1000,
  });

  if (isLoading) return <GlobalSpinner/>;
  const { data: filteredProducts } = data;


  const sortedArr =
    (sortType === "lowtohigh" || sortType === "hightolow"
      ? sortNumbers(filteredProducts, sortType)
      : sortNames(filteredProducts, sortType)) || filteredProducts;
  let totalItems = sortedArr.length;

  const paginationParams = {
    currentPage: page,
    hasNextPage: ITEMS_PER_PAGE * page < totalItems,
    hasPreviousPage: page > 1,
    nextPage: page + 1,
    previousPage: page - 1,
    lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE),

  };

  const paginatedArr = paginate(sortedArr, ITEMS_PER_PAGE, page);

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

      <div className="max-w-screen-xl mx-auto px-4">
        {/* Layout */}
        <div className="">
          {/* Title */}
          <div className="">
            <div className=" mb-4">
              <h3 className="text-[#212529] text-lg font-bold mb-4 lg:text-4xl text-center">
                Products
              </h3>
              <div className="mt-6  py-2 px-3 lg:py-3 flex justify-between border border-gray-200 rounded-lg w-full">
                {/* Layout */}

                <div className="flex items-center gap-3">
                  {/*  */}
                  <button
                    onClick={() => {
                      setDisplay(true);
                    }}
                    className={`${display ? "bg-sky-500/30 rounded-md" : ""}`}>
                    <ColumnDisplayIcon />
                  </button>
                  <button
                    onClick={() => {
                      setDisplay(false);
                    }}
                    className={`${!display ? "bg-sky-500/30 rounded-md" : ""}`}>
                    <RowDisplayIcon />
                  </button>
                  <p>Category:</p>
                  <select
                    name="Sorting"
                    defaultValue="all"
                    onChange={handleSelect}
                    className="select select-bordered border rounded-lg p-1">
                    <option value="all">All</option>
                    <option value="play aids">Play Aids</option>
                    <option value="toys">Toys</option>
                    <option value="baby care">Baby Care</option>
                    <option value="baby ware">Baby Wear</option>
                  </select>
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
                    onChange={handleSorting}
                    defaultValue="default"
                    className="select select-bordered border rounded-lg p-1">
                    <option value="default" disabled>
                      Choose your option
                    </option>
                    <option value="lowtohigh">Price: low to high</option>
                    <option value="hightolow">Price: high to low</option>
                    <option value="AtoZ">Alphabetically, A-Z</option>
                    <option value="ZtoA">Alphabetically, Z-A</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Cards */}
          <ProductGrid products={paginatedArr} display={display} user={user} />
          <Pagination setPage={setPage} paginationParams={paginationParams} />

        </div>
      </div>
    </div>
  );
};

export default Products;
