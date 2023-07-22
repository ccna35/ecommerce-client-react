import { useState } from "react";
import { AiFillPlusSquare, AiFillStar } from "react-icons/ai";
import ProductQuickView from "./ProductPage/ProductQuickView";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [openQuickView, setOpenQuickView] = useState(false);

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
          <AiFillPlusSquare className="text-chestnutRose" size={30} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
