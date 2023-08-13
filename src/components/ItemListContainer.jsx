import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ItemCount } from './ItemCount';
import ItemList from "./ItemList";
import {useState, useEffect} from 'react';

const productsPets = [
  { id: 1, 
    pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_7LgJTvk4V_MrST7q6ML-0egMJb0P7bTAg&usqp=CAU",
    title:"Correa para perro", description:"Loren Ipsum", price:1500},
  { id: 2, 
    pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs5fx1A17xjDoD1h3F8lzy8mDCWQ55KiQoqnCoe7HnR1gP1MBJxL_476DGTb_QYUwN0ug&usqp=CAU",
    title:"Cama para perro", description:"Loren Ipsum", price:3700},
  { id: 3, 
    pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpGq2ArnMvUUisUjhQQJ7zQYfQs0g5fd3xyQ&usqp=CAU",
    title:"Rascador para gato", description:"Loren Ipsum", price:5000},
  { id: 4, 
    pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8BaYwRxTcdkKEg5NxNVXciU926XczYO6icA9QIoxD3oZTx13e0otymeWSTQ0ZAYwOGdw&usqp=CAU",
    title:"Dispenser de Comida Automatico", description:"Loren Ipsum", price:10000},
];


 const ItemListContainer = ({greetings}) =>{
 
    const [data, setData]= useState([]);
    useEffect(() => {
      const getData= new Promise(resolve => {
        setTimeout(() => {
          resolve(productsPets)
        },3000);
      });
      getData.then(res => setData(res));
      
    }, []);

    return (
      <>
        <Container className='text-center'>
         
          <Row className='m-3'> 
           <ItemList data = {data}></ItemList>         
          </Row>

           <Row >
            <Col><h1>{greetings} </h1></Col>
          </Row>
        </Container>
        </>
      );
    }

export default ItemListContainer;