import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoApp from '../assets/LogoMascotapp.png'
import Image from 'react-bootstrap/Image';
import CartWidget from './CartWidget';


function NavBar() { 

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand href="#home"> <ion-icon name="bag"></ion-icon>
              <Image  src= {LogoApp} alt="Logo" sizes='sm' style={{ width: '75px', height: '75px' }}  />
              
              </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Quienes Somos</Nav.Link>
            <NavDropdown title="Perros" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Comida</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Juguetes </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Varios</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Adoptá un Perro
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Gatos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Comida</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Juguetes </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Varios</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Adoptá un Gato
              </NavDropdown.Item>              
            </NavDropdown>
            <NavDropdown title="Otras Mascotas" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Comida</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Varios
              </NavDropdown.Item>              
            </NavDropdown>
          </Nav>
          <Nav className='justify-content-end'>
            <Nav.Item>
            <Nav.Link href="#cart"><CartWidget item="912"/></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link className='text-center mt-4 mb-4' eventKey={2} href="#login">Iniciar Sesión</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;