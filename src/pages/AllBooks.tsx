import { Link, useLocation, useNavigate } from "react-router";
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

const AllBooks = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const [deleteBook] = useDeleteBookMutation();
  const books = data?.data || [];

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
      <Heading
        title={location.pathname === "/" ? "Featured Books" : "All Books"}
      />

      {/* add books */}
      {location.pathname === "/" ? (
        ""
      ) : (
        <div className="flex items-end justify-end mr-4 mb-6">
          <Link
            to="/create-book"
            className=" bg-primary font-medium py-2 pl-3 pr-6 rounded-lg 
            flex justify-center items-center gap-2"
          >
            <IoIosAdd className="text-2xl" /> Add Books
          </Link>
        </div>
      )}

      {/* book card */}
      {books.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
          {books.map((book: IBook) => (
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
    </>
  );
};

export default AllBooks;
