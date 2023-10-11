import { Search, ShoppingBag } from "lucide-react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import ShoppingCart from "../ShoppingCart";
import { MdSpaceDashboard } from "react-icons/md";
import UserMenu from "./UserMenu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiMenuAlt2 } from "react-icons/hi";
import DashboardMenu from "../DashboardMenu";
import axios from "axios";

const dropdownItems = [
  {
    id: 1,
    text: "All Categories",
  },
  {
    id: 2,
    text: "Car",
  },
  {
    id: 3,
    text: "Clothes",
  },
  {
    id: 4,
    text: "Electronics",
  },
  {
    id: 5,
    text: "Laptop",
  },
  {
    id: 6,
    text: "Desktop",
  },
  {
    id: 7,
    text: "Camera",
  },
  {
    id: 8,
    text: "Toys",
  },
];

const Navbar = () => {
  const [openShoppingCart, setOpenShoppingCart] = useState(false);
  const [openDashboardMenu, setOpenDashboardMenu] = useState(false);
  const [query, setQuery] = useState("");

  const { userInfo } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const handleSearch = async (e) => {
    console.log(e.target.value);
    if (e.target.value != "") {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/product/search/query?name=${e.target.value}&brand=&category=&price=9999`
        );

        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <nav className="bg-white py-4 border-b relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Link to="/">
            <img src="/logo.svg" alt="Logo" />
          </Link>
        </div>
        <div className="searchForm hidden lg:inline-flex items-center border border-secColor rounded-full flex-grow max-w-lg h-10">
          <Search size={50} className="text-secColor px-4" />
          <input
            type="search"
            className="focus:outline-none flex-grow"
            placeholder="Searching for..."
            aria-label="Search"
            aria-describedby="button-addon1"
            onChange={handleSearch}
          />
          <Menu as="div" className="relative inline-block text-left border-l">
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
          </Menu>
        </div>
        <div className="menu flex gap-4">
          {userInfo?.isAdmin && (
            <Link
              to="/dashboard"
              className="w-12 h-12 grid place-items-center bg-gray-100 rounded-full text-mainColor cursor-pointer"
            >
              <MdSpaceDashboard size={24} />
            </Link>
          )}

          <UserMenu />
          <div
            className="relative w-12 h-12 grid place-items-center bg-gray-100 rounded-full text-mainColor cursor-pointer"
            onClick={() => setOpenShoppingCart(true)}
          >
            {cartItems.length > 0 && (
              <span className="absolute w-5 h-5 text-xs right-0 -top-2 outline outline-2 outline-white text-center leading-5 rounded-full bg-chestnutRose text-white">
                {cartItems?.length}
              </span>
            )}
            <ShoppingBag size={24} />
            <ShoppingCart
              openShoppingCart={openShoppingCart}
              setOpenShoppingCart={setOpenShoppingCart}
            />
          </div>
          <div
            className="lg:hidden mb-4 w-12 h-12 grid place-items-center bg-gray-100 rounded-full text-mainColor cursor-pointer"
            onClick={() => setOpenDashboardMenu(true)}
          >
            <HiMenuAlt2 size={24} />
            <DashboardMenu
              openDashboardMenu={openDashboardMenu}
              setOpenDashboardMenu={setOpenDashboardMenu}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
