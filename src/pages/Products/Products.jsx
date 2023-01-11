import ColumnDisplayIcon from "../../components/common/icons/ColumnDisplayIcon";
import FilterIcon from "../../components/common/icons/FilterIcon";
import RowDisplayIcon from "../../components/common/icons/RowDisplayIcon";
import ProductCard from "./ProductCard";
// import ProductCardRow from "./ProductCardRow";

const Products = () => {
  const Headbar = () => {
    return (
      <div>
        {/* Container */}
        <div className="mt-6 mx-6 py-2 px-3 lg:py-3 flex justify-between border border-gray-200 rounded-lg">
          {/* Layout */}
          <div className="flex gap-3">
            {/* display */}
            <button>
              <ColumnDisplayIcon />
            </button>
            <button>
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
  const ProductFilter = () => {};
  // const ProductsRows = () => {
  //   return (
  //     <div>
  //       <ProductCardRow />
  //       <ProductCardRow />
  //       <ProductCardRow />
  //       <ProductCardRow />
  //     </div>
  //   );
  // };
  const ProductsGrid = () => {
    return (
      <div>
        {/* Container */}
        <div>
          {/* Layout */}
          <div className="grid grid-cols-2 lg:grid-cols-3 py-8 gap-8 px-8">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section>
      {/* Layout */}
      <header className="text-center text-4xl font-semibold">
        {/* Header */}
        <h1 className="mt-4">Products</h1>
      </header>
      <div>
        {/* Header */}
        <Headbar />
        {/* Content Box */}
        <div>
          <ProductsGrid />
          {/* <ProductsRows /> */}
        </div>
      </div>
    </section>
  );
};

export default Products;
