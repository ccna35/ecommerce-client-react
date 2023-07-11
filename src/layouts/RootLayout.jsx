import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import FooterComponent from "../components/Footer/Footer";
import Announcement from "../components/Navbar/Announcement";

const RootLayout = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <main className="bg-bgColor">
        <Outlet />
      </main>
      <FooterComponent />
    </>
  );
};

export default RootLayout;
