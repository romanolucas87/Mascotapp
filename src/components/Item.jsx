import { Card } from "react-bootstrap";
import {ItemCount} from "../components/ItemCount";


const Item = ({info}) => {
    const onAdd = (quantity)=>{
        console.log(`Compraste ${quantity} unidades`);
      }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant ="top" src={info.pictureUrl}   />
            <Card.Body>
                <Card.Title>{info.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${info.price}</Card.Subtitle> 
                <Card.Text> {info.description}</Card.Text>
        <Card.Link href="#">Acá va un link</Card.Link>   
        <ItemCount initial={1} stock={9} onAdd={onAdd}/>
            
                </Card.Body>            
            </Card>
    )
}


export default Item;