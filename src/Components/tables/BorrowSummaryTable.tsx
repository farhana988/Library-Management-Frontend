import type { IBorrowSummary } from "../../Interfaces/borrowBooks.interface";

interface BorrowBooks {
  item: IBorrowSummary;
  index: number;
}

const BorrowSummaryTable = ({ item, index }: BorrowBooks) => {
  const { book: { title, isbn }, totalQuantity} = item || {};
  return (
    <>
      <tr key={item._id} className="hover:bg-gray-50 transition duration-200">
        <td className="px-4 text-center py-3 text-sm">{index + 1}</td>
        <td className="px-4 text-center py-3 text-sm">{title}</td>
        <td className="px-4 text-center py-3 text-sm ">{isbn}</td>
        <td className="px-4 text-center py-3 text-sm">{totalQuantity}</td>
      </tr>
    </>
  );
};

export default BorrowSummaryTable;
