import { Link } from "react-router";
import type { IBook } from "../../Interfaces/books.interface";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaHandHoldingMedical } from "react-icons/fa";

interface Book {
  book: IBook;
  handleDelete: (id: string) => void;
}

const BookTable = ({ book, handleDelete }: Book) => {
  const { _id, title, author, genre, isbn, copies, available } = book || {};
  return (
    <tr className="hover:bg-gray-100">
      <td className="p-3 border text-xs lg:text-sm border-[#819067] font-semibold">
        {title}
      </td>
      <td className="p-3 border text-xs lg:text-sm border-[#819067]">
        {author}
      </td>
      <td className="p-3 border text-xs lg:text-sm border-[#819067]">
        {genre}
      </td>
      <td className="p-3 border text-xs lg:text-sm border-[#819067]">{isbn}</td>
      <td className="p-3 border text-xs lg:text-sm border-[#819067]">
        {copies}
      </td>
      <td className="p-3 border text-xs lg:text-sm border-[#819067]">
        <span
          className={`text-xs font-medium rounded-2xl px-4 py-[2px] ${
            available ? "bg-green-300" : "bg-red-300"
          }`}
        >
          {available ? "Available" : "Unavailable"}
        </span>
      </td>
      <td
        className="py-3 md:py-1 lg:py-3 lg:px-1 border-b border-[#819067] text-xl flex gap-3 items-center
      justify-center flex-col lg:flex-row"
      >
        <Link to={`/edit-book/${_id}`}>
          <CiEdit />
        </Link>
        <button onClick={() => handleDelete(_id)}>
          <MdDelete />
        </button>
        <Link to={`/borrow/${_id}`}>
          <FaHandHoldingMedical />
        </Link>
      </td>
    </tr>
  );
};

export default BookTable;
