import { useGetBooksQuery } from "../redux/feature/BookApi";

import LoadingSpinner from "../Components/Reusable/LoadingSpinner";
import ErrorMessage from "../Components/Reusable/ErrorMessage";
import { useParams } from "react-router";
import type { IBook } from "../Interfaces/books.interface";
import BookCard from "../Components/cards/BookCard";

const BookDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetBooksQuery(undefined);
  const book = data?.data.find((b: IBook) => b._id === id);

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage />;
  if (!book) return <p className="text-center">Book not found.</p>;

  return (
    <>
      {/* book details */}
      <BookCard book={book} />
    </>
  );
};

export default BookDetails;
