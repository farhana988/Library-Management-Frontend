import { Link, useLocation } from "react-router";
import type { IBook } from "../../Interfaces/books.interface";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaHandHoldingMedical } from "react-icons/fa";

interface Book {
  book: IBook;
  handleDelete: (id: string) => void;
}

const BookCard = ({ book, handleDelete }: Book) => {
  const location = useLocation();

  const isAllBooksPage = location.pathname === "/books" || "/";

  const { _id, title, author, genre, description, copies, available } =
    book || {};

  return (
    <div
      className="border-b-2 border-[#819067] p-5 rounded-xl shadow-xl
     hover:shadow-[#819067] flex flex-col justify-between"
    >
      {/* Card Content */}
      <div className={`space-y-2 ${isAllBooksPage ? "h-48" : "h-full"} `}>
        <h2 className="text-xl font-bold ">
          {" "}
          {isAllBooksPage ? title.slice(0, 25) : title}
        </h2>
        <p className="text-sm">
          <b>Author:</b> {author}
        </p>
        <p className="text-sm">
          <b>Genre: </b>
          {genre}
        </p>
        <p className="text-sm">
          <b>Description: </b>
          {isAllBooksPage ? description?.slice(0, 60) : description}
        </p>
        <p className="text-sm">
          <b>Copies: </b>
          {copies}
        </p>
        <p className="text-sm">
          <b>Availability: </b>
          <span
            className={`text-xs font-medium rounded-2xl px-4 py-[2px] ${
              available ? "bg-green-300" : "bg-red-300"
            }`}
          >
            {available ? "Available" : "Unavailable"}
          </span>
        </p>
      </div>

      {/* Button */}
      <div className="flex justify-between items-center flex-wrap gap-3 mt-6 text-xl">
        <Link to={`/edit-book/${_id}`}>
          <CiEdit />
        </Link>
        <button className="" onClick={() => handleDelete(book._id)}>
          <MdDelete />
        </button>
        <Link to={`/borrow/${_id}`}>
          <FaHandHoldingMedical />
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
