import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AllBooks from "../pages/AllBooks";
import BorrowSummary from "../pages/BorrowSummary";
import CreateBook from "../pages/CreateBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <AllBooks />,
      },
      {
        path: "/borrow-summary",
        element: <BorrowSummary />,
      },
      {
        path: "/create-book",
        element: <CreateBook />,
      },
    ],
  },
]);
export default router;
