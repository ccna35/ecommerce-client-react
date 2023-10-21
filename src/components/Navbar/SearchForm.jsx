import { Search } from "lucide-react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useRef, useState } from "react";
import { useLazyGetProductsByNameQuery } from "../../slices/ApiSlices/productsApiSlice";
import { Link } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside ";

const SearchForm = () => {
  const [isSearchResultsActive, setIsSearchResultsActive] = useState(false);
  const [query, setQuery] = useState("");

  const clickRef = useRef();

  useClickOutside(clickRef, () => {
    setIsSearchResultsActive(false);
  });

  const [trigger, { isError, isSuccess, isLoading, error, currentData, data }] =
    useLazyGetProductsByNameQuery();

  if (isError) {
    console.log(error);
  }

  if (isSuccess) {
    console.log(currentData);
  }

  const fetchProducts = (e) => {
    setQuery(e.target.value);
    if (e.target.value != "") {
      trigger(e.target.value);
    }
  };

  return (
    <div
      className="relative searchForm order-3 md:order-none inline-flex items-center border border-secColor rounded-full flex-grow lg:max-w-lg h-10"
      ref={clickRef}
    >
      {isSearchResultsActive && (
        <div className="absolute top-full w-full p-2 rounded-md border border-secColor bg-white">
          {isLoading ? (
            <p className="text-sm">Loading...</p>
          ) : isError && error.status === 404 ? (
            <p className="text-sm">No products were found!</p>
          ) : (
            data?.data?.map((product) => {
              return (
                <Link
                  to={`/product/${product._id}`}
                  key={product._id}
                  onClick={() => {
                    setIsSearchResultsActive(false);
                  }}
                >
                  <div className="flex gap-2 items-center cursor-pointer">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <img
                        className="absolute w-full h-full object-cover"
                        src={product.image}
                        alt={product.name}
                      />
                    </div>
                    <p className="max-w-sm truncate text-sm font-semibold leading-6 text-gray-900">
                      {product.name}
                    </p>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      )}
      <Search size={50} className="text-secColor px-4" />
      <div className="flex-grow p-2">
        <input
          type="search"
          className="focus:outline-none w-full"
          placeholder="Searching for..."
          aria-label="Search"
          aria-describedby="button-addon1"
          onChange={fetchProducts}
          onFocus={() => {
            setIsSearchResultsActive(true);
          }}
          value={query}
        />
      </div>
      {/* <Menu as="div" className="relative inline-block text-left border-l">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-secColor">
            All Categories
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {dropdownItems.map((item) => {
              return (
                <div className="px-1 py-1" key={item.id}>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-200" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {item.text}
                      </button>
                    )}
                  </Menu.Item>
                </div>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu> */}
    </div>
  );
};

export default SearchForm;
