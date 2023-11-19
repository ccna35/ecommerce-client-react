import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../../../components/common/BackButton";
import { PhotoIcon } from "@heroicons/react/20/solid";
import {
  useGetProductDetailsQuery,
  useUpdateProductDetailsMutation,
} from "../../../slices/ApiSlices/productsApiSlice";
import { useGetAllCategoriesQuery } from "../../../slices/ApiSlices/categoriesApiSlice";
import { useGetAllBrandsQuery } from "../../../slices/ApiSlices/brandsApiSlice";

const EditProductPage = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);

  const { data: categories, isLoading: areCategoriesLoading } =
    useGetAllCategoriesQuery();

  const { data: brands, isLoading: areBrandsLoading } = useGetAllBrandsQuery();

  const params = useParams();

  const {
    data: productDetails,
    isLoading: areProductDetailsLoading,
    isSuccess,
  } = useGetProductDetailsQuery(params.id);

  const [updateProductDetails] = useUpdateProductDetailsMutation();

  const navigate = useNavigate();

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
      console.log(reader.result);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      name: productName || productDetails.name,
      description: productDescription || productDetails.description,
      price: price || productDetails.price,
      brand: brand || productDetails.brand,
      category: category || productDetails.category,
      countInStock: quantity || productDetails.countInStock,
      image: image === null ? productDetails.image : image,
    };

    console.log(updatedData);

    try {
      const res = await updateProductDetails({
        updatedData,
        id: params.id,
      }).unwrap();
      console.log(res);

      navigate("/dashboard/products");
    } catch (error) {
      console.log(error);
    }
  };

  if (areProductDetailsLoading || areBrandsLoading || areCategoriesLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white rounded-md p-4 shadow-sm">
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <div className="grid gap-x-6 gap-y-8 grid-cols-6">
              <div className="col-span-6">
                <div className="mt-2 flex justify-between items-end gap-4">
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
                      defaultValue={productDetails.name}
                      onChange={(e) => {
                        setProductName(e.target.value);
                        console.log(e.target.value);
                      }}
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
                    placeholder="Description"
                    defaultValue={productDetails.description}
                    onChange={(e) => setProductDescription(e.target.value)}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-3">
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
                    min={0}
                    defaultValue={productDetails.countInStock}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-3">
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
                    onChange={(e) => setPrice(e.target.value)}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-3">
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
                  defaultValue={productDetails.brand}
                  onChange={(e) => setBrand(e.target.value)}
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
                  defaultValue={productDetails.category}
                  onChange={(e) => setCategory(e.target.value)}
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
              <div className="col-span-6 md:col-span-3">
                <div className="relative w-full h-40">
                  <img
                    src={image || productDetails.image}
                    alt={productDetails.name}
                    className="absolute w-full h-full object-contain"
                  />
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
