import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react";
import { getProduct } from '../AsyncMock';
import Loader from './Loader';
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/config";
export const ItemDetailContainer = () =>{
    
    const[product, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const productID = useParams();
     useEffect(()=>{

  const collectionRef = collection(firestore, "productsPets");
  getDocs(collectionRef).then(response => setProducts({id: response.id, ...response.data() })).catch(error => console.log(error)).finally(()=>setIsLoading(false));    
 }, [])
    // useEffect(() => {
    //     getProduct(productID.id)
    //     .then( result => {console.log(result);
    //             setProduct({...result})})
    //     .catch(error => console.error(error))
    //     .finally(()=> setIsLoading(false));


    // }, [productID]
    // )
    if(isLoading) return <Loader/>;

    // return(
    //     <>
    //     {isLoading && <Loader/>}
    //     {!isLoading &&(
    //         <ItemDetail data={product}/>
    //     )}
    //     </>
    // )
        return (
        <ItemDetail data={product}/>

    )
}

export default ItemDetailContainer;