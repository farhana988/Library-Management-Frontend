import { useForm } from "react-hook-form";
import type { IBook } from "../Interfaces/books.interface";
import { useCreateBookMutation } from "../redux/feature/BookApi";
import LoadingSpinner from "../Components/Reusable/LoadingSpinner";
import Heading from "../Components/Reusable/Heading";
import { useNavigate } from "react-router";
import ErrorMessage from "../Components/Reusable/ErrorMessage";
import { showErrorAlert, showSuccessAlert } from "../utils/swal";

const CreateBook = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IBook>();

  const [createBook, { isLoading, isError }] = useCreateBookMutation();

  const onSubmit = async (bookData: IBook) => {
    try {
      await createBook(bookData).unwrap();
      reset();
      showSuccessAlert("Book created successfully!");
      navigate("/books");
    } catch (error) {
      console.error("Create book failed:", error);
      showErrorAlert("Failed to create book. Please try again.");
    }
  };

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage />;

  return (
    <>
      <Heading title="Add a Book" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto p-6 rounded space-y-4
        shadow-lg shadow-[#819067] "
      >
        {/* Title */}
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Author */}
        <div>
          <label className="block font-medium">Author</label>
          <input
            type="text"
            {...register("author", { required: "Author is required" })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.author && (
            <p className="text-red-500 text-sm">{errors.author.message}</p>
          )}
        </div>

        {/* Genre */}
        <div>
          <label className="block font-medium">Genre</label>
          <select
            {...register("genre", { required: "Genre is required" })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Select Genre</option>
            <option value="FICTION">Fiction</option>
            <option value="NON_FICTION">Non-Fiction</option>
            <option value="SCIENCE">Science</option>
            <option value="HISTORY">History</option>
            <option value="BIOGRAPHY">Biography</option>
            <option value="FANTASY">Fantasy</option>
          </select>
          {errors.genre && (
            <p className="text-red-500 text-sm">{errors.genre.message}</p>
          )}
        </div>

        {/* ISBN */}
        <div>
          <label className="block font-medium">ISBN</label>
          <input
            type="text"
            {...register("isbn", { required: "ISBN is required" })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.isbn && (
            <p className="text-red-500 text-sm">{errors.isbn.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            {...register("description")}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Copies */}
        <div>
          <label className="block font-medium">Copies</label>
          <input
            type="number"
            {...register("copies", {
              required: "Number of copies is required",
              valueAsNumber: true,
              min: { value: 1, message: "At least 1 copy required" },
            })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.copies && (
            <p className="text-red-500 text-sm">{errors.copies.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full  bg-primary font-semibold py-2 rounded "
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default CreateBook;
