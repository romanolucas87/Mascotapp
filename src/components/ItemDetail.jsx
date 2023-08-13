import { Card } from "react-bootstrap";

export const ItemDetail = ({data}) =>{
    return (
       <Card>
         <Card style={{ width: '18rem' }}>
            <Card.Img variant ="top" src={data.pictureUrl}   />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${data.price}</Card.Subtitle> 
                <Card.Text> {data.description}</Card.Text>
        <Card.Link href="#">Acá va un link</Card.Link>               
                </Card.Body>            
            </Card>
       </Card>
    )
}

export default ItemDetail;