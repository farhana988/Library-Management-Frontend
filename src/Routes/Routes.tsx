import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
       path: "/", 
       element: <Home/>, 
      },
      // {
      //  path: "/", 
      //  element: 
      // }
    
    
    ],
  },
]);
export default router;
