import { useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "./BooksSlice";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const numberBooks = useSelector((state) => state.booksReducer.books.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: numberBooks + 1, title, author, description };
    dispatch(addBook(book));
    navigate("/");
  };

  return (
    <div>
      <Container className="my-5">
        <Row>
          <Col sm={10} md={8} className="mx-auto">
            <Card className="shadow-lg">
              <Card.Header
                className="p-3 text-center"
                style={{ backgroundColor: "gray" }}
              >
                <h4>Add Book</h4>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="title"
                      value={title}
                      placeholder="Enter Title"
                      id="title"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="author"
                      value={author}
                      placeholder="Enter Author Name"
                      id="author"
                      onChange={(e) => setAuthor(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      type="text"
                      name="description"
                      value={description}
                      placeholder="Enter Description"
                      id="description"
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <button
                    className="btn btn-primary w-100 fw-bold"
                    type="submit"
                  >
                    Add Book
                  </button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddBook;
