import ProductCard from "./ProductCard";
import productsList from "./ProductsList";
const ProductGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-6 pt-4 lg:grid-cols-4">
      {/* Product Card */}
      {productsList.map((item) => {
        return (
          <ProductCard
            key={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            price={item.price}
          />
        );
      })}
    </div>
  );
};
export default ProductGrid;
