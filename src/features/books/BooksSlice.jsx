import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    {
      id: 1,
      title: "Book Title 1",
      author: "Author 1",
      description: "Description of Book 1",
      imageUrl: "book1.jpg",
    },
    {
      id: 2,
      title: "Book Title 2",
      author: "Author 2",
      description: "Description of Book 2",
      imageUrl: "book2.jpg",
    },
    {
      id: 3,
      title: "Book Title 3",
      author: "Author 3",
      description: "Description of Book 3",
      imageUrl: "book3.jpg",
    },
    {
      id: 4,
      title: "Book Title 4",
      author: "Author 4",
      description: "Description of Book 4",
      imageUrl: "book4.jpg",
    },
    {
      id: 5,
      title: "Book Title 5",
      author: "Author 5",
      description: "Description of Book 5",
      imageUrl: "book5.jpg",
    },
    {
      id: 6,
      title: "Book Title 6",
      author: "Author 6",
      description: "Description of Book 6",
      imageUrl: "book6.jpg",
    },
    {
      id: 7,
      title: "Book Title 7",
      author: "Author 7",
      description: "Description of Book 7",
      imageUrl: "book7.jpg",
    },
    {
      id: 8,
      title: "Book Title 8",
      author: "Author 8",
      description: "Description of Book 8",
      imageUrl: "book8.jpg",
    },
    {
      id: 9,
      title: "Book Title 9",
      author: "Author 9",
      description: "Description of Book 9",
      imageUrl: "book9.jpg",
    },
    {
      id: 10,
      title: "Book Title 10",
      author: "Author 10",
      description: "Description of Book 10",
      imageUrl: "book10.jpg",
    },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
  },
  {

  }
});
export const { showBooks } = booksSlice.actions

export default booksSlice.reducer