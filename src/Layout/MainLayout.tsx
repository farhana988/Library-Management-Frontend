import { Outlet, useLocation } from "react-router";
import Navbar from "../Components/shared/Navbar/Navbar";
import Footer from "../Components/shared/Footer";
import Banner from "../Components/banner";

const MainLayout = () => {
  const location = useLocation();
  return (
    <>
      <div className="max-w-[1600px] mx-auto shadow-2xl">
        <Navbar />
        {location.pathname == "/" ? <Banner /> : ""}
        <div className="container mx-auto mt-10 px-5 xl:px-0 min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
