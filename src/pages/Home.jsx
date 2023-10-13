import { IoIosFlash } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import CategoryCard from "../components/Category/CategoryCard";
import CategorySmallCard from "../components/Category/CategorySmallCard";
import Feature from "../components/Features/Feature";
import { Link } from "react-router-dom";
import DefaultCarousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import { useGetAllProductsQuery } from "../slices/ApiSlices/productsApiSlice";
import { useGetAllCategoriesQuery } from "../slices/ApiSlices/categoriesApiSlice";
import ProductCardLoader from "../components/SkeletonLoader/ProductCardLoader";
import CategoryCardLoader from "../components/SkeletonLoader/CategoryCardLoader";

const Home = () => {
  const {
    data: products,
    isLoading: areProductsLoading,
    isError: isProductsError,
    error: productsError,
  } = useGetAllProductsQuery();
  const {
    data: categories,
    isLoading: areCategoriesLoading,
    isError: isCategoriesError,
    error: categoriesError,
  } = useGetAllCategoriesQuery();

  if (isCategoriesError) {
    console.log(categoriesError);
  }

  if (isProductsError) {
    console.log(productsError);
  }

  return (
    <main className="bg-bgColor">
      <section className="bg-white">
        <div className="container mx-auto">
          <DefaultCarousel />
        </div>
      </section>
      <section className="mt-16">
        <div className="container mx-auto">
          <div className="flex gap-2 my-8">
            <IoIosFlash className="text-chestnutRose" size={30} />
            <h2 className="text-2xl font-semibold text-mainColor">
              Flash Deals
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {areProductsLoading ? (
              <>
                <ProductCardLoader />
                <ProductCardLoader />
                <ProductCardLoader />
              </>
            ) : (
              products?.products?.map((product) => {
                return <ProductCard product={product} key={product._id} />;
              })
            )}
          </div>
        </div>
      </section>
      <section className="mt-16">
        <div className="container mx-auto">
          <div className="flex gap-2 my-8">
            <BiCategory className="text-chestnutRose" size={30} />
            <h2 className="text-2xl font-semibold text-mainColor">
              Top Categories
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {areCategoriesLoading ? (
              <>
                <CategoryCardLoader />
                <CategoryCardLoader />
                <CategoryCardLoader />
              </>
            ) : (
              categories?.data?.map((category) => {
                return (
                  <Link to={"/category/" + category.name} key={category._id}>
                    <CategoryCard category={category} />
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </section>
      <section className="mt-16">
        <div className="container mx-auto">
          <div className="flex gap-2 my-8">
            <BiCategory className="text-chestnutRose" size={30} />
            <h2 className="text-2xl font-semibold text-mainColor">
              Categories
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {categories?.data?.map((category) => {
              return (
                <Link to={"/category/" + category.name} key={category._id}>
                  {/* <CategoryCard category={category} /> */}
                  <CategorySmallCard category={category} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section className="mt-16">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <Feature />
          <Feature />
          <Feature />
          <Feature />
        </div>
      </section>
    </main>
  );
};

export default Home;
