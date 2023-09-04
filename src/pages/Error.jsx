import { Card, Col, Container, Row } from "react-bootstrap";

const Error = () => {
  return (
    <Container className="text-center">
      <Row className=" d-flex min-vh-100 align-items-center justify-content-center ">
        <Col sm={10} md={10} lg={8}>
          <Card className="shadow ">
            <Card.Img variant="top" src="../../public/404.jpg" />
            <Card.Body>
              <Card.Title>Oops!</Card.Title>
              <Card.Text>Sorry 😢 Page Not Found</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Error;
