import { Suspense } from "react";
import { Link } from "react-router-dom";
import ProductList from "../../../components/Dashboard/ProductList";

const ProductsPage = () => {
  return (
    <div className="bg-white rounded-md p-4 shadow-sm">
      <div className="mb-4 flex justify-between">
        <h2 className="text-2xl font-medium text-mainColor">Products</h2>
        <Link to="/dashboard/products/new">
          <button className="px-2 py-1 rounded-sm bg-green-700 text-white">
            New
          </button>
        </Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList />
      </Suspense>
    </div>
  );
};

export default ProductsPage;
