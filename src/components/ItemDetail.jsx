import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";


export const ItemDetail = ({data}) =>{
    const [goToCart, setGoToCart]= useState(false);
    const {addProductToCart} =  useCartContext();
    const onAdd = (quantity)=>{
        setGoToCart(true);
        addProductToCart(data, quantity);
      }
    return (
       <Card>
         <Card style={{ width: '18rem' }}>
            <Card.Img variant ="top" src={data.pictureUrl}   />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${data.price}</Card.Subtitle> 
                <Card.Text> {data.description}</Card.Text>
                {
                    goToCart ? <Link to='/cart'> TerminarCompra </Link> : <ItemCount initial={1} stock={9} onAdd={onAdd}/>
                }

                {/* <Card.Link href="#">Acá va un link</Card.Link>                */}
                </Card.Body>            
            </Card>
       </Card>
    )
}

export default ItemDetail;