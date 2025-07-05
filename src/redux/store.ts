import { configureStore } from "@reduxjs/toolkit";
import { bookApi } from "./feature/BookApi";
import { borrowBookApi } from "./feature/BorrowbookApi";

export const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer,
    [borrowBookApi.reducerPath]: borrowBookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(bookApi.middleware)
      .concat(borrowBookApi.middleware),
});
