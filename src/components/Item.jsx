import { Card } from "react-bootstrap";
import React from "react";


const Item = ({info}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant ="top" src={info.image}   />
            <Card.Body>
                <Card.Title>{info.title}</Card.Title> 
                <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Acá va un link</Card.Link>               
                </Card.Body>            
            </Card>
    )
}


export default Item;