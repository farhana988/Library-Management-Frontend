import {
  useDeleteBookMutation,
  useGetBooksQuery,
} from "../redux/feature/BookApi";

import LoadingSpinner from "../Components/Reusable/LoadingSpinner";
import ErrorMessage from "../Components/Reusable/ErrorMessage";
import { useNavigate, useParams } from "react-router";
import type { IBook } from "../Interfaces/books.interface";
import BookCard from "../Components/cards/BookCard";

import { confirmDeleteAlert, showErrorAlert, showSuccessAlert } from "../utils/swal";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetBooksQuery(undefined);
  const [deleteBook] = useDeleteBookMutation();
  const book = data?.data.find((b: IBook) => b._id === id);

  // delete function
  const handleDelete = (id: string) => {
   confirmDeleteAlert().then((result) => {
      if (result.isConfirmed) {
        deleteBook(id)
          .unwrap()
          .then(() => {
          showSuccessAlert("Book deleted successfully");
          navigate("/books");
        })
           .catch(() => {
          showErrorAlert("Failed to delete the book");
        });
      }
    });
  };

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage />;
  if (!book) return <p className="text-center">Book not found.</p>;

  return (
    <>
      {/* book details */}
      <BookCard book={book} handleDelete={handleDelete} />
    </>
  );
};

export default BookDetails;
