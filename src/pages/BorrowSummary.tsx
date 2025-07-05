import ErrorMessage from "../Components/Reusable/ErrorMessage";
import Heading from "../Components/Reusable/Heading";
import LoadingSpinner from "../Components/Reusable/LoadingSpinner";
import BorrowSummaryTable from "../Components/tables/BorrowSummaryTable";
import type { IBorrowSummary } from "../Interfaces/borrowBooks.interface";
import { useGetBorrowSummaryQuery } from "../redux/feature/BorrowbookApi";

const BorrowSummary = () => {
  const { data, isLoading, isError } = useGetBorrowSummaryQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const BorrowBooks = data?.data || [];

  if (isLoading) return <LoadingSpinner />;

  if (isError) return <ErrorMessage />;

  return (
    <div className="xl:w-10/12 mx-auto">
      <Heading title="Borrow Summary" />

      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-x-auto">
            <table className="min-w-[600px] w-full divide-y divide-gray-200 bg-white">
              <thead className="bg-primary text-center">
                <tr>
                  <th className="px-4 py-3 font-semibold">Serial</th>
                  <th className="px-4 py-3 font-semibold">Title</th>
                  <th className="px-4 py-3 font-semibold">ISBN</th>
                  <th className="px-4 py-3 font-semibold">Total Quantity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {BorrowBooks?.length > 0 ? (
                  BorrowBooks?.map((item: IBorrowSummary, index: number) => (
                    <BorrowSummaryTable
                      key={item._id}
                      item={item}
                      index={index}
                    />
                  ))
                ) : (
                  <p> No borrowed books found.</p>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowSummary;
