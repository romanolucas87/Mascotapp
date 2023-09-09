import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react";
import Loader from './Loader';
import { useParams } from "react-router-dom";
import { collection,getDocs } from "firebase/firestore";
import { firestore } from "../firebase/config";

export const ItemDetailContainer = () =>{
    
    const[product, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const productID = useParams();
     useEffect(()=>{
        const queryProducts = 
            collection(firestore, "productsPets")         
          getDocs(queryProducts)
            .then((snapshot) => { 
            const products =snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); 
            setProducts(products.find(product => product.id == productID.id))
            })
            .catch((e) => console.error(e))
            .finally(() => setIsLoading(false));    
    }, [productID])
    

    return(
        <>
        {isLoading && <Loader/>}
        {!isLoading &&(
            <ItemDetail data={product}/>
        )}
        </>
    )
}

export default ItemDetailContainer;