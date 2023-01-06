import Rating from "../../../components/common/Rating";

const ProductCard = ({ id, title, imageUrl, price }) => {
  return (
    <>
      <div className={id}>
        <img className="rounded-t-md" src={imageUrl} alt={title} />
        <div className="text-center bg-gray-200 p-4 rounded-b-md">
          <h4 className="pb-2">{title}</h4>
          <p className="pb-2">${price}</p>
          <Rating rating={5} />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
