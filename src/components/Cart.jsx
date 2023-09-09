import { useCartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import OrderForm from "./OrderForm";
const Cart = () => {
  const { cart, totalPrice } = useCartContext();
  const [showOrderForm, setShowOrderForm] = useState(false);
  const handlerClickPurchase = () => {
    setShowOrderForm(true);
  };
  const stylesParagraph = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    textAlign: "center",
    fontSize: "24px", 
    fontWeight: "bold", 
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
  };

  return (
    <>
      {cart.length === 0 && (
        <Container
          fluid
          className="vh-100 d-flex justify-content-center align-items-center"
        >
          <Row>
            <Col>
              <p style={stylesParagraph}>
                No hay elementos en el carrito por favor elija algún producto y continúe con la Compra
              </p>
            </Col>
          </Row>
        </Container>
      )}
      {cart.length > 0 && (
        <>
          {!showOrderForm ? (
            <Container className="vh-100 justify-content-center align-items-center">
              <Row className="Text-Center">
                {cart.map((product) => (
                  <ItemCart key={product.id} product={product} />
                ))}
                <div className="text-center">
                  <p className="h4 m-4">Precio total a Pagar ${totalPrice()}</p>
                  <Button onClick={handlerClickPurchase} variant="success">
                    COMPRAR
                  </Button>
                </div>
              </Row>
            </Container>
          ) : (
            <Container>
              <Row className="align-content-around">
                <h3 className="m-3 text-center">
                  POR FAVOR INGRESE SUS DATOS PARA CONFIRMAR LA COMPRA
                </h3>
                <Col sm={4}>
                  <OrderForm />
                </Col>
              </Row>
            </Container>
          )}
        </>
      )}
    </>
  );
};

export default Cart;
