import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../slices/cartSlice";

const CartItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const handleRemoveItemFromCart = (productId) => {
    dispatch(removeItem(productId));
  };

  const handleUpdateCartItem = (productId, quantity) => {
    dispatch(updateItem({ productId, quantity }));
  };

  const handleUpdateQuantity = (value) => {
    setQuantity((prev) => prev + value);

    handleUpdateCartItem(product.productId, quantity);
  };

  return (
    <li className="flex py-6">
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href={"product/" + product.productId}>{product.name}</a>
            </h3>
            <p className="ml-4">${product.price}</p>
          </div>
          <div className="mt-1 text-sm text-gray-500 inline-flex gap-2">
            <button
              className="py-1 px-4 rounded-sm bg-gray-200"
              onClick={() => handleUpdateQuantity(-1)}
            >
              -
            </button>
            <button
              className="py-1 px-4 rounded-sm bg-gray-200"
              onClick={() => handleUpdateQuantity(1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {quantity}</p>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-chestnutRose"
              onClick={() => handleRemoveItemFromCart(product.productId)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
