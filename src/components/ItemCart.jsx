import { Card, Button } from "react-bootstrap"
import { useCartContext } from "../context/CartContext"

const ItemCart = ({product}) =>{
    const {removeProduct} = useCartContext();
    return (
        <Card>
            <Card.Img variant="top" src={product.pictureUrl}/>
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
                <Button onClick={() => removeProduct(product.id)}> Eliminar</Button>
            </Card.Body>   
        </Card>
    )
}

export default ItemCart