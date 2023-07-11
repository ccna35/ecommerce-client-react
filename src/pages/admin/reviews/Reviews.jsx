import { Suspense } from "react";
import ReviewList from "../../../components/Dashboard/ReviewList";

const ReviewsPage = () => {
  return (
    <div className="bg-white rounded-md p-4 shadow-sm">
      <div className="mb-4 flex justify-between">
        <h2 className="text-2xl font-medium text-mainColor">Reviews</h2>
        <input
          type="search"
          name="user"
          id="user"
          className="block rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search sellers..."
        />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <ReviewList />
      </Suspense>
    </div>
  );
};

export default ReviewsPage;
