import { PhotoIcon } from "@heroicons/react/20/solid";
import BackButton from "../../../components/common/BackButton";
import { useAddBrandMutation } from "../../../slices/ApiSlices/brandsApiSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewBrandPage = () => {
  const [brandName, setBrandName] = useState("");
  const [errMsg, setErrorMsg] = useState("");

  const [addBrand, { isLoading, isError, error }] = useAddBrandMutation();

  const navigate = useNavigate();

  const submitNewBrand = async () => {
    setErrorMsg("");
    if (!brandName) setErrorMsg("Brand name cannot be empty!");
    if (brandName) {
      try {
        const res = await addBrand({ name: brandName }).unwrap();
        console.log(res);
        setErrorMsg("");
        navigate("/dashboard/brands");
      } catch (err) {
        console.log(err);
      }
    }
  };

  if (isError) console.log(error);

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
                      htmlFor="brand-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Brand Name
                    </label>
                    <input
                      type="text"
                      name="brand-name"
                      id="brand-name"
                      placeholder="Brand name"
                      required
                      onChange={(e) => setBrandName(e.target.value)}
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:text-sm sm:leading-6"
                    />
                    {(errMsg || isError) && (
                      <p className="text-xs bg-red-100 p-2 border border-red-300 text-red-600 rounded-sm mt-2">
                        {errMsg || error.data.message}
                      </p>
                    )}
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
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:text-sm sm:leading-6"
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
          type="button"
          onClick={submitNewBrand}
          className="mt-8 rounded-md bg-chestnutRose px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          {isLoading ? "Loading..." : "Add Brand"}
        </button>
      </form>
    </div>
  );
};

export default NewBrandPage;
