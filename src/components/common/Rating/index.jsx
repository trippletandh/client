import Star from "../Star";

const Rating = ({ rating = 5 }) => {
  return (
    <div className="flex justify-center ">
      {[...Array(rating).keys()].map((item) => (
        <Star key={item} />
      ))}
    </div>
  );
};

export default Rating;
