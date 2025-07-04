export interface IBorrow {
  book: string;
  quantity: number;
  dueDate: string;
}

export interface IBorrowSummary {
  _id: string;
  book: {
    title: string;
    isbn: string;
  };
  totalQuantity: number;
  dueDate: string;
}
