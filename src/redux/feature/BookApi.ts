import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),

  endpoints: (builder) => ({
    // all books
    getBooks: builder.query({
      query: () => "/books",
   
    }),
  }),
});

export const { useGetBooksQuery } = bookApi;
