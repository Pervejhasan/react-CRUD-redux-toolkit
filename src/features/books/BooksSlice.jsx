import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialBooks = {
  books: [
    {
      id: uuidv4(),
      title: "Book Title 1",
      author: "Author 1",
      description: "Description of Book 1",
    },
    {
      id: uuidv4(),
      title: "Book Title 2",
      author: "Author 2",
      description: "Description of Book 2",
    },
    {
      id: uuidv4(),
      title: "Book Title 3",
      author: "Author 3",
      description: "Description of Book 3",
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
    updateBook: (state, action) => {
      const { id, title, description, author } = action.payload;
      const isBookExits = state.books.filter((book) => book.id === id);
      if (isBookExits) {
        isBookExits[0].title = title;
        isBookExits[0].description = description;
        isBookExits[0].author = author;
      }
    },
  },
});
export const { showBooks, addBook, deleteBook, updateBook } =
  booksSlice.actions;

export default booksSlice.reducer;
