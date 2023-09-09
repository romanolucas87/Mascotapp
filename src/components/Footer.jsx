import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-body-secondary py-4 mt-auto">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <p>MascotApp &copy; {new Date().getFullYear()}</p>
          </Col>
          <Col xs={12} md={6}>
            <p>Dirección: Av. Figueroa Alcorta 124, Córdoba, Argentina</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
