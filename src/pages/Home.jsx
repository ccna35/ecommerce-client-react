import { useEffect, useState } from "react";
import { IoIosFlash } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import CategoryCard from "../components/Category/CategoryCard";
import CategorySmallCard from "../components/Category/CategorySmallCard";
import Feature from "../components/Features/Feature";
import { Link } from "react-router-dom";
import DefaultCarousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await fetch(`https://fakestoreapi.com/products/`);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      //   console.log(await res.json());
      setProducts(await res.json());
      //   return res.json();
    })();

    (async function () {
      const res = await fetch(`https://fakestoreapi.com/products/categories`);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      //   console.log(await res.json());
      setCategories(await res.json());
      //   return res.json();
    })();

    // return () => {

    // }
  }, []);
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
            {products?.map((product) => {
              return <ProductCard product={product} key={product.id} />;
            })}
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
            {categories.map((category) => {
              return (
                <Link to={"/category/" + category} key={category}>
                  <CategoryCard category={category} />
                </Link>
              );
            })}
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
            <CategorySmallCard />
            <CategorySmallCard />
            <CategorySmallCard />
            <CategorySmallCard />
            <CategorySmallCard />
            <CategorySmallCard />
            <CategorySmallCard />
            <CategorySmallCard />
            <CategorySmallCard />
            <CategorySmallCard />
            <CategorySmallCard />
            <CategorySmallCard />
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
