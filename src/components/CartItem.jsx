import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../slices/cartSlice";

const CartItem = ({ product }) => {
  const { cartItems } = useSelector((state) => state.cart);

  const cartItem = cartItems?.find(
    (item) => item.productId == product.productId
  );

  const dispatch = useDispatch();

  const handleRemoveItemFromCart = (productId) => {
    dispatch(removeItem(productId));
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
              onClick={() => dispatch(decrementQuantity(product.productId))}
            >
              -
            </button>
            <button
              className="py-1 px-4 rounded-sm bg-gray-200"
              onClick={() => dispatch(incrementQuantity(product.productId))}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">
            Qty {cartItem ? cartItem.quantity : 1}
          </p>

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
