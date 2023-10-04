import { Outlet, useLocation, useNavigate } from "react-router-dom";
import DashboardSidebar from "../components/Dashboard/Sidebar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { adminSidebarItems, profileSidebarItems } from "../constants";

export default function DashboardLayout() {
  const location = useLocation();

  const pathname = location.pathname.includes("dashboard")
    ? "dashboard"
    : "profile";

  const { userInfo } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo, navigate]);

  return (
    <div className="container mx-auto py-8 grid grid-cols-4 gap-4 bg-bgColor">
      <div className="hidden lg:block col-span-1">
        <DashboardSidebar
          sidebarItems={
            pathname === "dashboard" ? adminSidebarItems : profileSidebarItems
          }
          // mainTab={"/" + pathname}
        />
      </div>
      <main className="col-span-4 lg:col-span-3">
        <Outlet />
      </main>
    </div>
  );
}
