import { Suspense } from "react";
import { Link } from "react-router-dom";
import CategoryList from "../../../components/Dashboard/CategoryList";

const CategoriesPage = () => {
  return (
    <div className="bg-white rounded-md p-4 shadow-sm">
      <div className="mb-4 flex justify-between">
        <h2 className="text-2xl font-medium text-mainColor">Categories</h2>
        <Link to="/dashboard/categories/new">
          <button className="px-2 py-1 rounded-sm bg-green-700 text-white">
            New
          </button>
        </Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <CategoryList />
      </Suspense>
    </div>
  );
};

export default CategoriesPage;
