// import Rating from "../../../components/common/Rating";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getRandom } from "../../../services/productsService";
import ProductGrid from "./ProductGrid";

const TopratedProducts = ({ user }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => {
      return axios.get(`/products`);
    },
    // cacheTime: 5 * 60 * 1000,
  });

  if (isLoading) return <h1>Loading...</h1>;
  console.log(data);
  const products = data.data;
  const topRatedProducts = getRandom(products, 4);

  return (
    <div className="mt-8 lg:mt-16">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Layout */}
        <div className="">
          {/* Title */}
          <div className="text-center lg:flex items-center justify-center lg:gap-20">
            <div className=" mb-4">
              <h3 className="text-[#212529] text-lg font-bold mb-4 lg:text-4xl">
                Toprated Products
              </h3>
              <p className="text-xs lg:text-lg">
                Interesting Features Is Rich And Colorful, Each Button To Bring
                A Surprise To The Baby Introduction To Give <br /> Your Child
                Learn In Advance.
              </p>
            </div>
          </div>
          {/* Cards */}
          <ProductGrid products={topRatedProducts} user={user} />
        </div>
      </div>
    </div>
  );
};

export default TopratedProducts;
