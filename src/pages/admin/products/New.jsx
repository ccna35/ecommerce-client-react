import { PhotoIcon } from "@heroicons/react/20/solid";
import BackButton from "../../../components/common/BackButton";
import { useGetAllCategoriesQuery } from "../../../slices/ApiSlices/categoriesApiSlice";
import { useGetAllBrandsQuery } from "../../../slices/ApiSlices/brandsApiSlice";
import { useState } from "react";
import { useAddProductMutation } from "../../../slices/ApiSlices/productsApiSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewProductPage = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);

  const { data: categories } = useGetAllCategoriesQuery();
  const { data: brands } = useGetAllBrandsQuery();

  //handle and convert it in base 64
  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
    console.log(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
      console.log(typeof reader.result);
    };
  };

  const [addProduct, { isLoading }] = useAddProductMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      productName &&
      productDescription &&
      brand &&
      price &&
      category &&
      quantity
    ) {
      try {
        const res = await addProduct({
          name: productName,
          description: productDescription,
          brand,
          price,
          category,
          countInStock: quantity,
          image,
          user: userInfo?.id,
        }).unwrap();
        console.log(res);

        navigate("/dashboard/products");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("All fields are required!");
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (
  //     productName &&
  //     productDescription &&
  //     brand &&
  //     price &&
  //     category &&
  //     quantity
  //   ) {
  //     try {
  //       const res = await axios.post(
  //         "https://online-store-server-dr62.onrender.com/api/product/",
  //         {
  //           name: productName,
  //           description: productDescription,
  //           brand,
  //           price,
  //           category,
  //           countInStock: quantity,
  //           image,
  //           user: userInfo?.id,
  //         },
  //         {
  //           withCredentials: true,
  //         }
  //       );

  //       console.log(res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     console.log("All fields are required!");
  //   }
  // };

  return (
    <div className="bg-white rounded-md p-4 shadow-sm">
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <div className="grid gap-x-6 gap-y-8 grid-cols-6">
              <div className="col-span-6">
                <div className="mt-2 flex justify-between items-center gap-4">
                  <input
                    type="text"
                    name="product-name"
                    id="product-name"
                    placeholder="Product name"
                    onChange={(e) => setProductName(e.target.value)}
                    required
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
                    placeholder="Description"
                    required
                    onChange={(e) => setProductDescription(e.target.value)}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-3">
                <div className="mt-2">
                  <input
                    id="quantity"
                    name="quantity"
                    type="number"
                    min={1}
                    placeholder="Quantity"
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-3">
                <div className="mt-2">
                  <input
                    id="price"
                    name="price"
                    type="number"
                    placeholder="Price"
                    required
                    min={0}
                    onChange={(e) => setPrice(e.target.value)}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-3">
                <label htmlFor="brand">Brand:</label>
                <select
                  name="brand"
                  id="brand"
                  onChange={(e) => setBrand(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="">Please choose a brand</option>
                  {brands?.data?.map((brand) => {
                    return (
                      <option value={brand.name} key={brand._id}>
                        {brand.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-span-3">
                <label htmlFor="category">Category:</label>

                <select
                  name="category"
                  id="category"
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="">Please choose a category</option>
                  {categories?.data?.map((category) => {
                    return (
                      <option value={category.name} key={category._id}>
                        {category.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-span-6 md:col-span-3">
                <div className="flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
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
                          required
                          onChange={handleImage}
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
              {image && (
                <div className="col-span-6 md:col-span-3">
                  <div className="relative w-full h-40">
                    <img
                      src={image}
                      alt=""
                      className="absolute w-full h-full object-contain"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="mt-8 rounded-md bg-chestnutRose px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          {isLoading ? "Adding product..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default NewProductPage;
