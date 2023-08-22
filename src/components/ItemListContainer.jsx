import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ItemList from "./ItemList";
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { getProducts } from '../AsyncMock';
import Loader from './Loader';

 const ItemListContainer = () =>{
    const [products, setProducts]= useState([]);
    const params = useParams();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => { 
      getProducts()
        .then((response) => {
          params.id ? setProducts(response.filter(product => product.category == params.id)) : setProducts(response);          
        })
        .catch(error => console.error(error))
        .finally(()=> setIsLoading(false));     
      
    }, [params]);
    if(isLoading) return <Loader/>;
    return (
      <>
        <Container className='text-center'>         
          <Row className='m-3'> 
           <ItemList productList = {products}></ItemList>         
          </Row>          
        </Container>
        </>
      );
    }

export default ItemListContainer;