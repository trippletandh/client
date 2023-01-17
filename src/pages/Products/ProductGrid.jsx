import ProductCard from "./ProductCard";
import ProdudctCardRow from "./ProdudctCardRow";
// import productsList from "./ProductsList";
const ProductGrid = ({ products, display }) => {
  return (
    <div className="grid grid-cols-2 gap-6 pt-4 lg:grid-cols-4">
      {/* Product Card */}
      {products.map((item) => {
        return (
          <ProductCard
            key={item._id}
            title={item.title}
            imageUrl={item.photos[0]}
            price={item.price}
            id={item._id}
          />
        );
      })}
      <div>
        {products.map((item) => {
          if (display === false) {
            return (
              <ProdudctCardRow
                key={item._id}
                title={item.title}
                imageUrl={item.photos[0]}
                price={item.price}
                description={item.description}
                id={item._id}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
export default ProductGrid;
