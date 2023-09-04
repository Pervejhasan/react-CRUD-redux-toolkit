import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import BooksView from "../features/books/BooksView";
import AddBook from "../features/books/addBook";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/add-book",
        element: <AddBook />,
      },
      {
        path: "/show-books",
        element: <BooksView />,
      },

      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default router;
