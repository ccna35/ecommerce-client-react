import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../../../components/common/BackButton";
import { PhotoIcon } from "@heroicons/react/20/solid";

const EditProductPage = () => {
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

  return (
    <div className="bg-white rounded-md p-4 shadow-sm">
      <form className="">
        <div className="">
          <div className="">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <div className="mt-2 flex justify-between items-center">
                  <div className="w-full sm:max-w-sm">
                    <label
                      htmlFor="product-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product Name
                    </label>
                    <input
                      type="text"
                      name="product-name"
                      id="product-name"
                      placeholder="Product name"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:text-sm sm:leading-6"
                      defaultValue={productDetails.title}
                    />
                  </div>
                  <BackButton />
                </div>
              </div>

              <div className="col-span-6">
                <div className="mt-2">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    placeholder="description"
                    defaultValue={productDetails.description}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <div className="mt-2">
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Quantity
                  </label>
                  <input
                    id="quantity"
                    name="quantity"
                    type="number"
                    placeholder="Quantity"
                    defaultValue={43}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <div className="mt-2">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Price
                  </label>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    placeholder="Price"
                    defaultValue={productDetails.price}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="products"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Brand
                </label>

                <select
                  name="products"
                  id="products"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="Nike" selected>
                    Nike
                  </option>
                  <option value="Adidas">Adidas</option>
                  <option value="Apple">Apple</option>
                  <option value="Samsung">Samsung</option>
                </select>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="categories"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Category
                </label>

                <select
                  name="categories"
                  id="categories"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="Menswear">Menswear</option>
                  <option value="Shoes" selected>
                    Shoes
                  </option>
                  <option value="Laptops">Laptops</option>
                  <option value="Kitchen">Kitchen</option>
                </select>
              </div>
              <div className="sm:col-span-3">
                <div className="relative w-full h-40">
                  <img
                    src={productDetails.image}
                    alt={productDetails.title}
                    className="absolute w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-chestnutRose focus-within:outline-none focus-within:ring-2 focus-within:ring-red-600 focus-within:ring-offset-2 hover:text-red-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 rounded-md bg-chestnutRose px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
