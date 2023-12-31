import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteBook } from "./BooksSlice";
const BooksView = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    toast.success("Book delete successfully!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    dispatch(deleteBook(id));
  };
  return (
    <div>
      <h2 className="text-center py-3 text-secondary">Show All Books</h2>
      <div className="container">
        <div className="row pb-5">
          <div className="col">
            <div className="card bg-transparent">
              <div className="card-body ">
                <Table
                  className="text-center "
                  striped
                  bordered
                  hover
                  variant="dark"
                >
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Author Name</th>
                      <th>Description</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {books.length > 0 &&
                      books.map((book) => {
                        const { id, title, author, description } = book;
                        return (
                          <tr key={id}>
                            <td>{id}</td>
                            <td>{title}</td>
                            <td>{author}</td>
                            <td>{description}</td>
                            <td>
                              <Link
                                to={"/edit-book"}
                                state={{ id, title, description, author }}
                              >
                                <button className="px-3 mb-2 btn btn-sm rounded-sm fw-bold  me-2 border-0 py-1 text-white bg-warning">
                                  Edit
                                </button>
                              </Link>
                              <button
                                onClick={() => handleDelete(id)}
                                className="px-3 mb-2 btn btn-sm rounded-sm fw-bold  border-0 py-1 text-white bg-danger"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BooksView;
