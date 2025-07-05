import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowBookApi = createApi({
  reducerPath: "borrowPath",
  tagTypes: ["borrows", "books"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://library-management-api-orcin.vercel.app/api" }),

  endpoints: (build) => ({
    // get all borrow summary
    getBorrowSummary: build.query({
      query: () => "/borrow",
      providesTags: ["borrows"],
    }),
    // create a borrow book
    borrowBook: build.mutation({
      query: (borrowData) => ({
        url: "/borrow",
        method: "POST",
        body: borrowData,
      }),
      invalidatesTags: ["books", "borrows"],
    }),
  }),
});

export const { useBorrowBookMutation, useGetBorrowSummaryQuery } =
  borrowBookApi;
