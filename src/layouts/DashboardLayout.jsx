import { Outlet, useLocation } from "react-router-dom";
import DashboardSidebar from "../components/Dashboard/Sidebar";
import { useEffect } from "react";

export default function DashboardLayout() {
  const adminSidebarItems = [
    {
      id: 1,
      text: "Overview",
      href: "/dashboard",
    },
    {
      id: 2,
      text: "Products",
      href: "/dashboard/products",
    },
    {
      id: 3,
      text: "Categories",
      href: "/dashboard/categories",
    },
    {
      id: 4,
      text: "Brands",
      href: "/dashboard/brands",
    },
    {
      id: 5,
      text: "Orders",
      href: "/dashboard/orders",
    },
    {
      id: 6,
      text: "Reviews",
      href: "/dashboard/reviews",
    },
    {
      id: 7,
      text: "Users",
      href: "/dashboard/users",
    },
    {
      id: 8,
      text: "Sellers",
      href: "/dashboard/sellers",
    },
  ];

  const profileSidebarItems = [
    {
      id: 1,
      text: "Account Details",
      href: "/profile",
    },
    {
      id: 2,
      text: "Orders",
      href: "/profile/orders",
    },
    {
      id: 3,
      text: "Wishlist",
      href: "/profile/wishlist",
    },
  ];

  const location = useLocation();

  const pathname = location.pathname.includes("dashboard")
    ? "dashboard"
    : "profile";

  return (
    <div className="container mx-auto py-8 grid grid-cols-4 gap-4 bg-bgColor">
      <div className="hidden lg:block col-span-1">
        <DashboardSidebar
          sidebarItems={
            pathname === "dashboard" ? adminSidebarItems : profileSidebarItems
          }
          mainTab={"/" + pathname}
        />
      </div>
      <main className="col-span-4 lg:col-span-3">
        <Outlet />
      </main>
    </div>
  );
}
