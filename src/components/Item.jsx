import { Card } from "react-bootstrap";
import React from "react";


const Item = ({info}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant ="top" src={info.pictureUrl}   />
            <Card.Body>
                <Card.Title>{info.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${info.price}</Card.Subtitle> 
                <Card.Text> {info.description}</Card.Text>
        <Card.Link href="#">Acá va un link</Card.Link>               
                </Card.Body>            
            </Card>
    )
}


export default Item;