import FilterIcon from "../../components/common/icons/FilterIcon";

const ProducFilter = () => {
  return (
    <>
      {/* Title */}
      <div className="">
        <div className=" mb-4">
          <h3 className="text-[#212529] text-lg font-bold mb-4 lg:text-4xl text-center">
            Products
          </h3>
          <div className="mt-6  py-2 px-3 lg:py-3 flex justify-between border border-gray-200 rounded-lg w-full">
            {/* Layout */}
            <div className="flex items-center gap-3">
              <p>Category:</p>
              <select
                name="Sorting"
                defaultValue="all"
                className="select select-bordered border rounded-lg p-1"
              >
                <option value="all">All</option>
                <option value="bear">Bear</option>
                <option value="lamp">Lamp</option>
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
      </div>
    </>
  );
};
export default ProducFilter;
