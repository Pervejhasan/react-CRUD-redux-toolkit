import { useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { updateBook } from "./BooksSlice";

const EditBook = () => {
  const location = useLocation();
  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [description, setDescription] = useState(location.state.description);
  const [author, setAuthor] = useState(location.state.author);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    setId(location.state.id);
    dispatch(updateBook({ id, title, author, description }));
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
                <h4>Edit Book</h4>
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
                    Update Book
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

export default EditBook;
