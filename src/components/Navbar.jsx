import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoApp from "../assets/LogoMascotapp2.png";
import Image from "react-bootstrap/Image";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  const links = [
    { to: "/category/1", text: "Perros" },
    { to: "/category/2", text: "Gatos" },
    { to: "/category/3", text: "Otras Mascotas" },
  ];
  const linkStyle = {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand>
          {" "}
          <ion-icon name="bag"></ion-icon>
          <Link to={"/"}>
            {" "}
            <Image
              src={LogoApp}
              alt="Logo"
              sizes="sm"
              style={{ width: "75px", height: "75px" }}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {links.map((link, index) => (
              <Nav.Link key={index}>
                <Link to={link.to} style={{ ...linkStyle }}>
                  {link.text}
                </Link>
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Item>
              <Link to={"/cart"}>
                <CartWidget />
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
