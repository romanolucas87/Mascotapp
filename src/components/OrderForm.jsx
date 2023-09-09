import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useCartContext } from '../context/CartContext';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../firebase/config';
import {  useNavigate } from 'react-router-dom';

function OrderForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
  });
  const navigate = useNavigate();

  const { cart, totalPrice , } = useCartContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSaveOrders = () => {
    const order = {
      ...formData,
        cart: cart.map((product) => ({
        id: product.id,
        title: product.title, 
        price: product.price,
        quantity: product.quantity,
      })),
      totalPrice: totalPrice(),
    };

    const ordersCollections = collection(firestore, 'orders');
    addDoc(ordersCollections, order).then(({id})=> { id ? navigate('/cart/purchase') : null } ); 
  };

  return (
    <>
    {
       <Form>
        <Form.Group controlId="firstName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </Form.Group>
        <Button onClick={handleSaveOrders} variant='info'>Confirmar Compra</Button>
      </Form>
    }    
    </>
  );
}

export default OrderForm;
