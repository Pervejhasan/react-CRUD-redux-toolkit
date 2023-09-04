import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="md" bg="dark" data-bs-theme="dark" className="p-3">
      <Container>
        <Navbar.Brand to={"/"}>
          <span className="text-muted fw-bold">React-CRUD</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="text-center  ms-auto ">
            <Link
              className="text-decoration-none me-2  mb-sm-2 mb-md-0"
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="text-decoration-none me-2  mb-sm-2 mb-md-0"
              to={"/show-books"}
            >
              Show Books
            </Link>
            <Link className="text-decoration-none me-2 " to={"/add-book"}>
              Add Book
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
