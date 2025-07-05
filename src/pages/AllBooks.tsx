import { useLocation, useNavigate } from "react-router";
import {
  useDeleteBookMutation,
  useGetBooksQuery,
} from "../redux/feature/BookApi";
import type { IBook } from "../Interfaces/books.interface";
import BookCard from "../Components/cards/BookCard";
import Heading from "../Components/Reusable/Heading";
import { IoIosAdd } from "react-icons/io";
import LoadingSpinner from "../Components/Reusable/LoadingSpinner";
import ErrorMessage from "../Components/Reusable/ErrorMessage";
import {
  confirmDeleteAlert,
  showErrorAlert,
  showSuccessAlert,
} from "../utils/swal";
import BtnwithIcon from "../Components/Reusable/BtnwithIcon";
import { FaArrowRight } from "react-icons/fa";

const AllBooks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const { data, isLoading, isError } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const [deleteBook] = useDeleteBookMutation();
  const books = data?.data || [];

  const displayedBooks = isHomePage ? books.slice(0, 8) : books;
  // delete function
  const handleDelete = (id: string) => {
    confirmDeleteAlert().then((result) => {
      if (result.isConfirmed) {
        deleteBook(id)
          .unwrap()
          .then(() => {
            showSuccessAlert("Book deleted successfully");
          })
          .catch(() => {
            showErrorAlert("Failed to delete the book");
          });
      }
    });
  };

  if (isLoading) return <LoadingSpinner />;

  if (isError) return <ErrorMessage />;

  return (
    <>
      <Heading title={isHomePage ? "Featured Books" : "All Books"} />

      {/* add books */}
      {isHomePage ? (
        ""
      ) : (
        <BtnwithIcon
          to="/create-book"
          label="Add New Books"
          icon={<IoIosAdd className="text-2xl" />}
        />
      )}

      {/* book card */}
      {displayedBooks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
          {displayedBooks.map((book: IBook) => (
            <div
              key={book._id}
              className="cursor-pointer"
              onClick={(e) => {
                const target = e.target as HTMLElement;

                if (
                  target.closest("button") ||
                  target.closest("a") ||
                  target.getAttribute("role") === "button"
                ) {
                  return;
                }

                navigate(`/books/${book._id}`);
              }}
            >
              <BookCard book={book} handleDelete={handleDelete} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No books found.</p>
      )}
      {isHomePage && (
        <BtnwithIcon
          to="/books"
          label="Show All Books"
          icon={<FaArrowRight />}
        />
      )}
    </>
  );
};

export default AllBooks;
