import { Card } from "react-bootstrap";

const Item = ({info}) => {   
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Card style={{ width: '18rem', height:'400px'}}  border="dark" className="m-1">
            <Card.Img variant ="top" src={info.pictureUrl}  style={{ width: '100%', height: '175px' }} className="m-1 mx-auto my-auto"/>
            <Card.Body>
                <Card.Title>{info.title}</Card.Title>
                <Card.Subtitle className="mb-2" text="white">${info.price}</Card.Subtitle> 
                <Card.Text> {info.description}</Card.Text>            
                </Card.Body>            
            </Card>
        </div>
    )
}


export default Item;