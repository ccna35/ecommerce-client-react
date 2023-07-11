import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

export default function CategorySidebar() {
  const [sliderValue, setSliderValue] = useState(500);

  return (
    <div className="hidden md:flex flex-col gap-4">
      <div className="bg-white rounded-md shadow-sm">
        <div className="p-4 border-b">
          <p className="text-xl font-semibold">Price</p>
        </div>
        <div className="p-4 flex flex-col gap-4">
          <input
            type="range"
            className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
            onChange={(e) => setSliderValue(e.target.value)}
            max={1000}
          />
          <div className="flex justify-between">
            <p>$0</p>
            <p>${sliderValue}</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-md shadow-sm">
        <div className="p-4 border-b">
          <p className="text-xl font-semibold">Rating</p>
        </div>
        <div className="p-4 flex flex-col gap-4">
          <fieldset>
            <div className="space-y-6">
              <div className="flex items-center gap-x-3">
                <input
                  id="one-star"
                  name="rating"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  checked
                />
                <label
                  htmlFor="one-star"
                  className="flex items-center gap-2 text-sm leading-6 text-gray-900"
                >
                  <span className="text-yellow-500">
                    <AiFillStar />
                  </span>
                  <span> & more</span>
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="two-stars"
                  name="rating"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="two-stars"
                  className="flex items-center gap-2 text-sm leading-6 text-gray-900"
                >
                  <span className="text-yellow-500 flex">
                    <AiFillStar /> <AiFillStar />
                  </span>
                  <span> & more</span>
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="three-stars"
                  name="rating"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="three-stars"
                  className="flex items-center gap-2 text-sm leading-6 text-gray-900"
                >
                  <span className="text-yellow-500 flex">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                  <span> & more</span>
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="four-stars"
                  name="rating"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="four-stars"
                  className="flex items-center gap-2 text-sm leading-6 text-gray-900"
                >
                  <span className="text-yellow-500 flex">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                  <span> & more</span>
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="five-stars"
                  name="rating"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="five-stars"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  <span className="text-yellow-500 flex">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
