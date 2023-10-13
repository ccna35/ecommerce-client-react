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
import { useGetProductsByNameQuery } from "../../slices/ApiSlices/productsApiSlice";
import SearchForm from "./SearchForm";

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

  function closeModal() {
    setOpenShoppingCart(false);
  }

  const { userInfo } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <nav className="bg-white py-4 border-b relative z-10">
      <div className="container mx-auto flex justify-between items-center gap-4 flex-wrap">
        <div className="logo">
          <Link to="/">
            <img src="/logo.svg" alt="Logo" />
          </Link>
        </div>
        <SearchForm />
        <div className="menu flex gap-4 items-center">
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
              closeModal={closeModal}
            />
          </div>
          <div
            className="lg:hidden w-12 h-12 grid place-items-center bg-gray-100 rounded-full text-mainColor cursor-pointer"
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
