import { Card, Button } from "react-bootstrap"
import { useCartContext } from "../context/CartContext"

const ItemCart = ({product}) =>{
    const {removeProduct} = useCartContext();
    return (
        <Card style={{ width: '18rem', height:'auto'}}  border="dark" className="m-1" bg="light">
            <Card.Img variant="top" src={product.pictureUrl}style={{ width: '100%', height: '175px' }} className="m-1 mx-auto my-auto"/>
            <Card.Body>   
                <Card.Title>
                    {product.title}
                </Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Cantidad: {product.quantity}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Precio Unitario: {product.price}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">SubTotal:${product.quantity * product.price}</Card.Subtitle>
                <Card.Footer  className="text-center bottom-0"> 
                 <Button onClick={() => removeProduct(product.id)} variant="danger" > Eliminar</Button>
                </Card.Footer>
            </Card.Body>   
        </Card>
    )
}

export default ItemCart