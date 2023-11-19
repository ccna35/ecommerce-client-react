import { useState } from "react";
import { useAddReviewMutation } from "../../slices/ApiSlices/reviewsApiSlice";

const NewReview = ({ productId, setReviews }) => {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");

  const [addReview] = useAddReviewMutation();

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    const body = {
      rating,
      comment,
      id: productId,
    };
    console.log(body);
    try {
      const res = await addReview(body).unwrap();

      console.log(res);

      setComment("");
      setRating(1);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white rounded-md p-4 shadow-sm max-w-xl">
      <form className="" onSubmit={handleSubmitReview}>
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {/* <div className="sm:col-span-6">
            <input
              type="text"
              name="review"
              id="review"
              placeholder="Review title"
              className="block w-full sm:max-w-sm rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:text-sm sm:leading-6"
            />
          </div> */}

          <div className="col-span-6">
            <div className="mt-2">
              <textarea
                value={comment}
                name="description"
                id="description"
                placeholder="Description"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:text-sm sm:leading-6"
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="rating">Rating:</label>

            <select
              name="rating"
              id="rating"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) => setRating(e.target.value)}
              value={rating}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 rounded-md bg-chestnutRose px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default NewReview;
