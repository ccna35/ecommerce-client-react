import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { adminSidebarItems, profileSidebarItems } from "../constants";

export default function DashboardMenu({
  openDashboardMenu,
  setOpenDashboardMenu,
}) {
  const [activeTab, setActiveTab] = useState("");

  const location = useLocation();

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  const { userInfo } = useSelector((state) => state.auth);

  return (
    <Transition.Root show={openDashboardMenu} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setOpenDashboardMenu(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between mb-4">
                        {/* <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title> */}
                        <div className="flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpenDashboardMenu(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4">
                        {(userInfo?.isAdmin
                          ? adminSidebarItems
                          : profileSidebarItems
                        ).map((item) => {
                          return (
                            <Link
                              to={item.href}
                              className={`${
                                activeTab === item.href &&
                                "bg-yellow-500 text-white"
                              } px-4 py-2 rounded-sm text-mainColor`}
                              key={item.id}
                              onClick={() => {
                                setOpenDashboardMenu(false);
                                setActiveTab(item.href);
                              }}
                            >
                              {item.text}
                            </Link>
                          );
                        })}
                      </div>

                      {/* <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cartItems?.map((product) => {
                              return (
                                <CartItem
                                  product={product}
                                  key={product.productId}
                                />
                              );
                            })}
                          </ul>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
