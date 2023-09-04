import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    {
      id: 1,
      title: "Book Title 1",
      author: "Author 1",
      description: "Description of Book 1",
    },
    {
      id: 2,
      title: "Book Title 2",
      author: "Author 2",
      description: "Description of Book 2",
    },
    {
      id: 3,
      title: "Book Title 3",
      author: "Author 3",
      description: "Description of Book 3",
    },
    {
      id: 4,
      title: "Book Title 4",
      author: "Author 4",
      description: "Description of Book 4",
    },
    {
      id: 5,
      title: "Book Title 5",
      author: "Author 5",
      description: "Description of Book 5",
    },
    {
      id: 6,
      title: "Book Title 6",
      author: "Author 6",
      description: "Description of Book 6",
    },
    {
      id: 7,
      title: "Book Title 7",
      author: "Author 7",
      description: "Description of Book 7",
    },
    {
      id: 8,
      title: "Book Title 8",
      author: "Author 8",
      description: "Description of Book 8",
    },
    {
      id: 9,
      title: "Book Title 9",
      author: "Author 9",
      description: "Description of Book 9",
    },
    {
      id: 10,
      title: "Book Title 10",
      author: "Author 10",
      description: "Description of Book 10",
    },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      // const id=action.payload;
      state.books = state.books.filter((book) => book.id != action.payload);
    },
  },
});
export const { showBooks, addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
