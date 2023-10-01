import { useState } from "react";
import { AiFillPlusSquare, AiFillStar } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import { AiFillHeart } from "react-icons/ai";
import ProductQuickView from "./ProductPage/ProductQuickView";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../slices/cartSlice";
import axios from "axios";

const ProductCard = ({ product }) => {
  const [openQuickView, setOpenQuickView] = useState(false);

  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const itemAddedToCart = cartItems.find(
    (item) => item.productId == product._id
  );

  const handleAddToCart = () => {
    const cartItem = cartItems.filter(
      (item) => item.productId == product.productId
    );
    if (cartItem.length == 0) {
      const data = {
        productId: product._id,
        image: product.image,
        name: product.name,
        price: product.price,
        quantity: 1,
      };

      dispatch(addItem(data));
    }
  };

  const handleWishlist = async () => {
    try {
      const res = await axios.patch(
        "http://localhost:8080/wishlist",
        {
          productId: product._id,
        },
        {
          withCredentials: true,
        }
      );

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm relative transition-shadow duration-300 hover:shadow-lg overflow-hidden">
      {/* <span className="absolute z-10 top-2 left-2 py-2 px-4 bg-chestnutRose text-white text-xs rounded-full">
        25% off
      </span> */}

      <div className="relative h-60 group">
        <Link to={`/product/${product._id}`}>
          <img
            src={product.image}
            alt="product image"
            className="absolute w-full h-full object-cover"
          />
        </Link>
        <button
          className="absolute px-4 py-2 bg-gray-400 bg-opacity-30 rounded-md left-4 bottom-4 text-sm text-gray-600 hidden group-hover:block"
          onClick={() => setOpenQuickView(true)}
        >
          Quick View
        </button>
        <ProductQuickView
          openQuickView={openQuickView}
          setOpenQuickView={setOpenQuickView}
          product={product}
        />
      </div>
      <div className="p-2 flex flex-col gap-4">
        <p className="w-full truncate">{product.name}</p>

        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <p className="text-chestnutRose">${product.price}</p>
            <div className="flex gap-1 items-center">
              <p>{product.rating}</p>
              <span className="text-yellow-500">
                <AiFillStar />
              </span>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <span
              className="cursor-pointer text-gray-400"
              onClick={handleWishlist}
            >
              <AiFillHeart size={20} />
            </span>
            {itemAddedToCart ? (
              <TiDelete
                className="text-chestnutRose cursor-pointer"
                size={30}
                onClick={() => dispatch(removeItem(product._id))}
              />
            ) : (
              <AiFillPlusSquare
                className="text-chestnutRose cursor-pointer"
                size={30}
                onClick={handleAddToCart}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
