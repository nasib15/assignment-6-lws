const StarRating = ({ rating }) => {
  const stars = [];
  const totalStars = 5;

  for (let i = 1; i <= totalStars; i++) {
    stars.push(
      <span
        key={i}
        className={`text-xl ${
          i <= rating ? "text-yellow-500" : "text-gray-300"
        }`}
      >
        ★
      </span>
    );
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
