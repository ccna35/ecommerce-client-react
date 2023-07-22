import { useParams } from "react-router-dom";
import NewReview from "../components/ProductPage/NewReview";
import Review from "../components/ProductPage/Review";
import Spinner from "../components/common/Spinner";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";

const ProductPage = () => {
  const params = useParams();

  const { data, isLoading, isError, error, isSuccess } =
    useGetProductDetailsQuery(params.id);

  if (isError) {
    console.log(error);
  }

  if (isSuccess) {
    console.log(data);
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container mx-auto grid place-items-center py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {/* <ProductGallery productImages={productImages} /> */}
        <div className="relative h-[20rem]">
          <img
            src={data.image}
            alt={data.name}
            className="absolute w-full h-full object-contain"
          />
        </div>
        <div className="text-mainColor flex flex-col items-start gap-8">
          <h2 className="text-3xl font-bold">{data.name}</h2>
          <p>
            Brand: <b>{data.brand}</b>
          </p>
          <p>{data.description}</p>
          <div>
            <p className="text-chestnutRose text-2xl font-bold">
              ${data.price}
            </p>
            <p className="text-green-600">
              <span>{data.quantity}</span> left In stock
            </p>
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
