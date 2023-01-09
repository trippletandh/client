import Rating from "../../../components/common/Rating";

const ProductCard = ({ id, title, imageUrl, price }) => {
  return (
    <div className="group relative">
      <div className={id}>
        <img className="group rounded-t-md" src={imageUrl} alt={title} />
        <div className="text-center bg-gray-200 p-4 rounded-b-md relative">
          <h4 className="pb-2">{title}</h4>
          <p className="pb-2">${price}</p>
          {/* <Rating rating={5} /> */}
          <button className="bg-[#212529] text-white py-2 px-4 rounded-md  hover:bg-white hover:text-black md:px-6 md:absolute -top-36 lg:left-24  md:hidden md:group-hover:block transition duration-500 ">
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
