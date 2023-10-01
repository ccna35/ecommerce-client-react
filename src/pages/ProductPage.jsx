import { useParams } from "react-router-dom";
import NewReview from "../components/ProductPage/NewReview";
import Review from "../components/ProductPage/Review";
import Spinner from "../components/common/Spinner";
import { useGetProductDetailsQuery } from "../slices/ApiSlices/productsApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../slices/cartSlice";

const ProductPage = () => {
  const dispatch = useDispatch();

  const params = useParams();

  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const DoesThisItemExistsInCart = cartItems?.find(
    (item) => item.productId === params.id
  );

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

  const handleAddToCart = () => {
    const itemDetails = {
      productId: data._id,
      image: data.image,
      name: data.name,
      price: data.price,
      quantity: 1,
    };

    dispatch(addItem(itemDetails));
  };

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
              <span>{data.countInStock}</span> left In stock
            </p>
          </div>
          <button
            className={`py-2 px-4 text-white rounded-sm transition-colors duration-300 ${
              DoesThisItemExistsInCart
                ? "bg-gray-400 hover:bg-gray-600"
                : "bg-chestnutRose hover:bg-red-600"
            }`}
            onClick={handleAddToCart}
            disabled={DoesThisItemExistsInCart}
          >
            {DoesThisItemExistsInCart ? "Added to cart" : "Add to cart"}
          </button>
        </div>
      </div>
      <div className="my-8 w-full flex flex-col gap-4">
        {userInfo && <NewReview productId={params.id} />}

        <div className="flex flex-col gap-4">
          {data?.reviews.map((review) => {
            return <Review review={review} key={review._id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
