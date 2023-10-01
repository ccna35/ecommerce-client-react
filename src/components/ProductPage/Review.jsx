import { AiFillStar } from "react-icons/ai";

const Review = ({ review }) => {
  // const rating = 3;

  const stars = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
  ];

  // Input date string
  const dateString = "2023-09-30T01:24:51.649Z";

  // Parse the date string into a Date object
  const date = new Date(review.createdAt);

  // Define formatting options
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  // Format the date according to the options
  const formattedDate = date.toLocaleDateString("en-US", options);

  console.log(formattedDate);

  return (
    <div className="bg-white rounded-md p-4 shadow-sm">
      <div className="mb-2 flex">
        {stars.map((star) => {
          return (
            <span
              className={`${
                star.id <= review.rating ? "text-yellow-500" : "text-gray-400"
              }`}
              key={star.id}
            >
              <AiFillStar />
            </span>
          );
        })}
      </div>
      {/* <h2 className="text-xl md:text-2xl font-medium leading-normal text-gray-800">
        This is a headline
      </h2> */}
      <div>
        <p className="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6">
          {review.comment}
        </p>

        <div className="mt-6 flex justify-start items-center flex-row space-x-2.5">
          <div className="relative h-12 w-12">
            <img
              className="flex-none rounded-full bg-gray-50"
              src="/userPhoto.svg"
              alt="user photo"
            />
          </div>
          <div className="flex flex-col justify-start items-start space-y-2">
            <p className="text-base font-medium leading-none text-gray-800">
              Anna Kendrick
            </p>
            <p className="text-sm leading-none text-gray-600">
              {formattedDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
