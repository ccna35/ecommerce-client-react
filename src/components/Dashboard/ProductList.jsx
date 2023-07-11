import { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);

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

    // return () => {

    // }
  }, []);

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {products.map((product) => (
        <li
          key={product.id}
          className="flex justify-between items-center gap-6 py-5 flex-wrap"
        >
          <div className="flex gap-x-4">
            <div className="relative h-12 w-12 rounded-full overflow-hidden">
              <img
                className="absolute w-full h-full object-contain"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="min-w-0 flex-auto">
              <p className="max-w-sm truncate text-sm font-semibold leading-6 text-gray-900">
                {product.title}
              </p>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link to={`/dashboard/products/${product.id}/edit`}>
              <button className="px-2 py-1 rounded-sm bg-green-700 text-white">
                <AiFillEdit />
              </button>
            </Link>
            <button className="px-2 py-1 rounded-sm bg-blue-700 text-white">
              <HiArrowUpRight />
            </button>
            <button className="px-2 py-1 rounded-sm bg-red-700 text-white">
              <AiFillDelete />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
