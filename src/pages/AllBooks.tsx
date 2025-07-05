import { Link, useLocation } from "react-router";
import { useGetBooksQuery } from "../redux/feature/BookApi";
import type { IBook } from "../Interfaces/books.interface";
import BookCard from "../Components/cards/BookCard";
import Heading from "../Components/Reusable/Heading";
import { IoIosAdd } from "react-icons/io";
import LoadingSpinner from "../Components/Reusable/LoadingSpinner";

const AllBooks = () => {
  const location = useLocation();
  const { data, isLoading, isError } = useGetBooksQuery(undefined);
  const books = data?.data || [];

  if (isLoading) return <LoadingSpinner />;

  if (isError)
    return (
      <p>
        Something went wrong! Try refreshing the page or check your internet
        connection.
      </p>
    );

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
            to="/addBook"
            className=" bg-primary font-medium py-2 pl-3 pr-6 rounded-lg 
            flex justify-center items-center gap-2"
          >
            <IoIosAdd className="text-2xl" /> Add Books
          </Link>
        </div>
      )}

      {/* book card */}
      {books.length > 0 ? (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
             gap-4 px-4"
        >
          {books.map((book: IBook) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      ) : (
        <p className="text-center">No books found.</p>
      )}
    </>
  );
};

export default AllBooks;
