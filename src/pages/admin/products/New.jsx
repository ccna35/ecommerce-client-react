// import BackButton from "@/app/components/common/BackButton";
// import { PhotoIcon } from "@heroicons/react/20/solid";

import { PhotoIcon } from "@heroicons/react/20/solid";
import BackButton from "../../../components/common/BackButton";

const NewProductPage = () => {
  return (
    <div className="bg-white rounded-md p-4 shadow-sm">
      <form className="">
        <div className="">
          <div className="">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <div className="mt-2 flex justify-between items-center">
                  <input
                    type="text"
                    name="product-name"
                    id="product-name"
                    placeholder="Product name"
                    className="block w-full sm:max-w-sm rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:text-sm sm:leading-6"
                  />
                  <BackButton />
                </div>
              </div>

              <div className="col-span-6">
                <div className="mt-2">
                  <textarea
                    name="description"
                    id="description"
                    placeholder="description"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <div className="mt-2">
                  <input
                    id="quantity"
                    name="quantity"
                    type="number"
                    placeholder="Quantity"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <div className="mt-2">
                  <input
                    id="price"
                    name="price"
                    type="number"
                    placeholder="Price"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="brand">Brand:</label>

                <select
                  name="brand"
                  id="brand"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="nike">Nike</option>
                  <option value="adidas">Adidas</option>
                  <option value="apple">Apple</option>
                  <option value="samsung">Samsung</option>
                </select>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="category">Category:</label>

                <select
                  name="category"
                  id="category"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="Menswear">Menswear</option>
                  <option value="Shoes">Shoes</option>
                  <option value="Laptops">Laptops</option>
                  <option value="Kitchen">Kitchen</option>
                </select>
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
          Add Product
        </button>
      </form>
    </div>
  );
};

export default NewProductPage;
