import { useEffect, useState } from "react";

export default function BrandList() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await fetch(`https://fakestoreapi.com/products/categories`);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      //   console.log(await res.json());
      setBrands(await res.json());
      //   return res.json();
    })();

    // return () => {

    // }
  }, []);

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {brands.map((brand) => (
        <li
          key={brand}
          className="flex justify-between items-center gap-6 py-5 flex-wrap"
        >
          <div className="flex gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="max-w-sm truncate text-sm font-semibold leading-6 text-gray-900">
                {brand}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
