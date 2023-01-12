import ProducFilter from "./ProducFilter";
import ProductGrid from "./ProductGrid";

const Products = () => {
  return (
    <div className="mt-8 lg:mt-16">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Layout */}
        <div className="">
          {/* Filter */}
          <ProducFilter />
          {/* Cards */}
          <ProductGrid />
          {/* Paganation */}
          <div className="flex justify-center items-center mt-6 gap-4">
            <button className="bg-black text-white px-3 py-2 rounded-md">
              1
            </button>
            <button className="">2</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
