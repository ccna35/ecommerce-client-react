import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { AiFillAlert } from "react-icons/ai";
import { LogInIcon, User } from "lucide-react";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { BiLeftArrowCircle } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/authSlice";

export default function UserMenu() {
  const menuItems = [
    {
      id: 1,
      text: "Profile",
      icon: <FaUser />,
      href: "/profile",
    },
    {
      id: 2,
      text: "Log in",
      icon: <LogInIcon />,
      href: "/login",
    },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    try {
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  const { userInfo } = useSelector((state) => state.auth);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="w-12 h-12 grid place-items-center bg-gray-100 rounded-full text-mainColor">
          <User size={24} />
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
          <div className="px-1 py-1 ">
            <Link to="/profile">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-chestnutRose text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                  >
                    <FaUser />
                    <span>Profile</span>
                  </button>
                )}
              </Menu.Item>
            </Link>
            {userInfo ? (
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-chestnutRose text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                    onClick={logoutHandler}
                  >
                    <BsArrowLeft />
                    <span>Sign out</span>
                  </button>
                )}
              </Menu.Item>
            ) : (
              <Link to="/login">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-chestnutRose text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                    >
                      <LogInIcon />
                      <span>Log in</span>
                    </button>
                  )}
                </Menu.Item>
              </Link>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
