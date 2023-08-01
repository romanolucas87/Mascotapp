import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ItemCount } from './ItemCount';



function ItemListContainer ({greetings}){
  const onAdd = (quantity)=>{
    console.log(`Compraste ${quantity} unidades`);
  }
    return (
        <Container className='text-center'>
          <Row >
            <Col><h1>{greetings} </h1></Col>
            <ItemCount initial={1} stock={9} onAdd={onAdd}/>
          </Row>
        </Container>
      );
    }

export default ItemListContainer;