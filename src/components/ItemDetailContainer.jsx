import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react";
import { getProduct } from '../AsyncMock';
import Loader from './Loader';
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () =>{
    
    const[product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const productID = useParams();

    useEffect(() => {
        console.log(productID)
        getProduct(productID.id)
        .then( result => {console.log(result);
                setProduct({...result})})
        .catch(error => console.error(error))
        .finally(()=> setIsLoading(false));


    }, [productID]
    )
    if(isLoading) return <Loader/>;

        return (
        <ItemDetail data={product}/>
    )
}

export default ItemDetailContainer;