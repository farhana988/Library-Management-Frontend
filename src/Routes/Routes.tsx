import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AllBooks from "../pages/AllBooks";
import BorrowSummary from "../pages/BorrowSummary";
import CreateBook from "../pages/CreateBook";
import BookDetails from "../pages/BookDetails";
import EditBook from "../pages/EditBook";
import BorrowBook from "../pages/BorrowBook";

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
        path: "/create-book",
        element: <CreateBook />,
      },
      {
        path: "/books/:id",
        element: <BookDetails />,
      },
      {
        path: "/edit-book/:id",
        element: <EditBook />,
      },
      {
        path: "/borrow-summary",
        element: <BorrowSummary />,
      },
      {
        path: "/borrow/:bookId",
        element: <BorrowBook />,
      },
    ],
  },
]);
export default router;
