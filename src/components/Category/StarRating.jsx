import { AiFillStar } from "react-icons/ai";

const StarRating = ({ numOfStars }) => {
  let id;

  switch (numOfStars) {
    case 1:
      id = "one";
      break;
    case 2:
      id = "two";
      break;
    case 3:
      id = "three";
      break;
    case 4:
      id = "four";
      break;
    case 5:
      id = "five";
      break;

    default:
      break;
  }

  return (
    <div className="flex items-center gap-x-3">
      <input
        id={id}
        name="rating"
        type="radio"
        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
      />
      <label
        htmlFor={id}
        className="flex items-center gap-1 text-sm leading-6 text-gray-900"
      >
        {Array.from({ length: numOfStars }, (_, index) => index + 1).map(
          (star) => {
            return (
              <span className="text-yellow-500" key={star}>
                <AiFillStar />
              </span>
            );
          }
        )}
      </label>
    </div>
  );
};

export default StarRating;
