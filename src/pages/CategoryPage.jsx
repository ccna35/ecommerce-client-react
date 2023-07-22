import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import CategorySidebar from "../components/Category/Sidebar";
import { useGetProductsByCategoryQuery } from "../slices/productsApiSlice";

const CategoryPage = () => {
  const params = useParams();

  console.log(params);

  const {
    data: products,
    // isLoading: areProductsLoading,
    isError: isProductsError,
    error: productsError,
  } = useGetProductsByCategoryQuery(params.id);

  if (isProductsError) {
    console.log(productsError);
  }

  return (
    <main className="py-16">
      <div className="container mx-auto grid grid-cols-4 gap-8">
        <CategorySidebar />
        <div className="col-span-4 md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
            {products?.map((product) => {
              return <ProductCard product={product} key={product._id} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CategoryPage;
