import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import Spinner from "../components/common/Spinner";
import CategorySidebar from "../components/Category/Sidebar";

const CategoryPage = () => {
  const [products, setProducts] = useState([]);

  const params = useParams();

  console.log(params);

  useEffect(() => {
    (async function getCategoryProducts() {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${params.id}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      //   console.log(await res.json());
      setProducts(await res.json());
      //   return res.json();
    })();

    // return () => {

    // }
  }, [params]);

  if (products.length === 0) {
    return <Spinner />;
  }

  return (
    <main className="py-16">
      <div className="container mx-auto grid grid-cols-4 gap-8">
        <CategorySidebar />
        <div className="col-span-4 md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {products?.map((product) => {
              return <ProductCard product={product} key={product.id} />;
            })}
          </div>
        </div>
      </div>
    </main>

    // <section className="py-16">
    //   <div className="container mx-auto">
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
    //       {products?.map((product) => {
    //         return <ProductCard product={product} key={product.id} />;
    //       })}
    //     </div>
    //   </div>
    // </section>
  );
};

export default CategoryPage;
