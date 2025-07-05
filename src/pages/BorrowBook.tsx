import { useNavigate, useParams } from "react-router";
import { useGetSingleBookQuery } from "../redux/feature/BookApi";
import type { IBorrow } from "../Interfaces/borrowBooks.interface";
import { useForm } from "react-hook-form";
import { useBorrowBookMutation } from "../redux/feature/BorrowbookApi";
import Heading from "../Components/Reusable/Heading";
import { FaSpinner } from "react-icons/fa";
import LoadingSpinner from "../Components/Reusable/LoadingSpinner";
import ErrorMessage from "../Components/Reusable/ErrorMessage";
import { showErrorAlert, showSuccessAlert } from "../utils/swal";

const BorrowBook = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();

  const { data, isLoading, isError, refetch } = useGetSingleBookQuery(
    bookId || ""
  );
  const [borrowBook, { isLoading: borrowing }] = useBorrowBookMutation();
  const borrow = data?.data || [];
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<IBorrow>();

  const onSubmit = async (data: IBorrow) => {
    if (!bookId || !data) return;

    const payload: IBorrow = {
      ...data,
      book: borrow._id,
    };

    try {
      await borrowBook(payload).unwrap();
      reset();
      refetch();
      showSuccessAlert("Book borrowed successfully!");
      navigate("/borrow-summary");
    } catch (err) {
      console.error("Borrow error:", err);
      showErrorAlert("Failed to borrow book. Please try again.");
    }
  };

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage />;

  const isDisabled =
    borrowing ||
    borrow.copies === 0 ||
    (watch("quantity") || 0) > borrow.copies;

  return (
    <>
      <Heading title="Borrow A Book" />
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-20">
        {/* book details */}
        <div
          className="py-20 lg:p-6 rounded-md flex flex-col items-center justify-center
        text-center mb-6 shadow-2xl"
        >
          <h2 className="text-xl xl:text-2xl font-bold mb-6">Book Details</h2>
          <p>
            <b>Title: </b>
            {borrow.title}
          </p>
          <p>
            <b>Author: </b>
            {borrow.author}
          </p>
          <p>
            <b>Available Copies: </b>
            {borrow.copies}
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-2 shadow-2xl p-4"
        >
          {/* quantity */}
          <div>
            <label className="block mb-1 font-medium">Quantity</label>
            <input
              type="number"
              {...register("quantity", {
                required: "Quantity is required",
                min: { value: 1, message: "Minimum 1 copy required" },
                max: {
                  value: data.copies,
                  message: `Only ${data.copies} available`,
                },
                valueAsNumber: true,
              })}
              className={`w-full border ${
                errors.quantity ? "border-red-500" : "border-gray-300"
              } rounded px-4 py-2`}
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm mt-1">
                {errors.quantity.message}
              </p>
            )}
          </div>
          {/* due date */}
          <div>
            <label className="block mb-1 font-medium">Due Date</label>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              {...register("dueDate", { required: "Due date is required" })}
              className={`w-full border ${
                errors.dueDate ? "border-red-500" : "border-gray-300"
              } rounded px-4 py-2`}
            />
            {errors.dueDate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.dueDate.message}
              </p>
            )}
          </div>
          {/* submit btn */}
          <button
            type="submit"
            disabled={isDisabled}
            className={`w-full py-2 rounded-md ${
              isDisabled ? "bg-gray-300 cursor-not-allowed" : "bg-primary"
            }`}
          >
            {borrow.copies === 0 ? (
              "Unavailable"
            ) : borrowing ? (
              <FaSpinner className="animate-spin mx-auto" />
            ) : (
              "Borrow"
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default BorrowBook;
