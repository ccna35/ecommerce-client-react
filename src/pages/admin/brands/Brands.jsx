import { Suspense } from "react";
import { Link } from "react-router-dom";
import BrandList from "../../../components/Dashboard/BrandList";

const BrandsPage = () => {
  return (
    <div className="bg-white rounded-md p-4 shadow-sm">
      <div className="mb-4 flex justify-between">
        <h2 className="text-2xl font-medium text-mainColor">Brands</h2>
        <Link to="/dashboard/brands/new">
          <button className="px-2 py-1 rounded-sm bg-green-700 text-white">
            New
          </button>
        </Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <BrandList />
      </Suspense>
    </div>
  );
};

export default BrandsPage;
