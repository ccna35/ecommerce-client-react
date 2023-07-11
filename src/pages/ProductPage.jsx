import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewReview from "../components/ProductPage/NewReview";
import Review from "../components/ProductPage/Review";
import Spinner from "../components/common/Spinner";

const ProductPage = () => {
  const [productDetails, setProductDetails] = useState({});

  const params = useParams();

  useEffect(() => {
    (async function getCategoryProducts() {
      const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      //   console.log(await res.json());
      setProductDetails(await res.json());
      //   return res.json();
    })();

    // return () => {

    // }
  }, [params]);

  if (Object.keys(productDetails).length === 0) {
    return <Spinner />;
  }

  return (
    <div className="container mx-auto grid place-items-center py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {/* <ProductGallery productImages={productImages} /> */}
        <div className="relative h-[20rem]">
          <img
            src={productDetails.image}
            alt={productDetails.title}
            className="absolute w-full h-full object-contain"
          />
        </div>
        <div className="text-mainColor flex flex-col items-start gap-8">
          <h2 className="text-3xl font-bold">{productDetails.title}</h2>
          <p>
            Brand: <b>Nike</b>
          </p>
          <p>{productDetails.description}</p>
          <div>
            <p className="text-chestnutRose text-2xl font-bold">
              ${productDetails.price}
            </p>
            <p className="text-green-600">In stock</p>
          </div>
          <button className="py-2 px-4 bg-chestnutRose text-white rounded-sm hover:bg-red-600 transition-colors duration-300">
            Add to cart
          </button>
          <p>
            Sold by: <b>Shoes Store</b>
          </p>
        </div>
      </div>
      <div className="my-8 w-full flex flex-col gap-4">
        <NewReview />
        <div className="flex flex-col gap-4">
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
