import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowBookApi = createApi({
  reducerPath: "borrowPath",
  tagTypes: ["borrows", "books"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),

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
