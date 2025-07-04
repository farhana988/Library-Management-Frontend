import { Outlet } from "react-router";
import Navbar from "../Components/shared/Navbar";
import Footer from "../Components/shared/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
