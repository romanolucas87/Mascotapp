import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function ItemListContainer ({greetings}){
    return (
        <Container className='text-center'>
          <Row >
            <Col><h1>{greetings} </h1></Col>
          </Row>
        </Container>
      );
    }

export default ItemListContainer;