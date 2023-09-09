import './SuccessMessage.css';
import LogoApp from '../assets/LogoMascotapp2.png'
import {Image,Container,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

function SuccessMessage() {
  const {clearCart} =  useCartContext();

  clearCart() 
  return (
    <div >
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={6} className="text-center">
            <Image src={LogoApp} thumbnail className="logo-image" />
            <p className='h2'>¡Compra exitosa! Gracias por tu pedido. <Link className='text-decoration-none' to={'/'}>Volver al inicio</Link></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SuccessMessage;
