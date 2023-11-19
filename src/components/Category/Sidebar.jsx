import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import StarRating from "./StarRating";

export default function CategorySidebar() {
  const [sliderValue, setSliderValue] = useState(10000);

  return (
    <aside>
      <form className="hidden md:flex flex-col gap-4">
        <div className="bg-white rounded-md shadow-sm">
          <div className="p-4 border-b">
            <p className="text-xl font-semibold">Price</p>
          </div>
          <div className="p-4 flex flex-col gap-4">
            <input
              type="range"
              className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
              onChange={(e) => setSliderValue(e.target.value)}
              max={10000}
              min={0}
              value={sliderValue}
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
                {Array.from({ length: 5 }, (_, index) => index + 1).map(
                  (star) => {
                    return <StarRating numOfStars={star} key={star} />;
                  }
                )}
              </div>
            </fieldset>
          </div>
        </div>
        <button
          type="submit"
          className="rounded-md bg-chestnutRose px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Filter
        </button>
      </form>
    </aside>
  );
}
