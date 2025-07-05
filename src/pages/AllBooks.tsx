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

import BookTable from "../Components/tables/BookTable";

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

      {/* Add Book Button */}
      {!isHomePage && (
        <BtnwithIcon
          to="/create-book"
          label="Add New Books"
          icon={<IoIosAdd className="text-2xl" />}
        />
      )}

      {/* Books Display */}
      {displayedBooks?.length > 0 ? (
        // card
        isHomePage ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
            {displayedBooks?.map((book: IBook) => (
              <div
                key={book?._id}
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

                  navigate(`/books/${book?._id}`);
                }}
              >
                <BookCard book={book} handleDelete={handleDelete} />
              </div>
            ))}
          </div>
        ) : (
          // table
          <div className="overflow-x-auto mt-6 px-4">
            <table
              className="table-auto w-full border border-collapse border-[#819067]
             shadow-md rounded-lg"
            >
              <thead>
                <tr className="bg-primary text-left shadow-lg rounded-lg">
                  {[
                    "Title",
                    "Author",
                    "Genre",
                    "ISBN",
                    "Copies",
                    "Availability",
                    "Actions",
                  ].map((heading) => (
                    <th key={heading} className="p-3 border border-[#819067]">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {displayedBooks?.map((book: IBook) => (
                  <BookTable
                    key={book?._id}
                    book={book}
                    handleDelete={handleDelete}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )
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
