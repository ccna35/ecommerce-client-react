import { AiFillStar } from "react-icons/ai";

const Review = () => {
  const rating = 3;

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

  return (
    <div className="bg-white rounded-md p-4 shadow-sm">
      <div className="mb-2 flex">
        {stars.map((star) => {
          return (
            <span
              className={`${
                star.id <= rating ? "text-yellow-500" : "text-gray-400"
              }`}
              key={star.id}
            >
              <AiFillStar />
            </span>
          );
        })}
      </div>
      <h2 className="text-xl md:text-2xl font-medium leading-normal text-gray-800">
        Beautiful addition to the theme
      </h2>
      <div>
        <p className="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6">
          When you want to decorate your home, the idea of choosing a decorative
          theme can seem daunting. Some themes seem to have an endless amount of
          pieces, while others can feel hard to accomplish
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
            <p className="text-sm leading-none text-gray-600">14 July 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
