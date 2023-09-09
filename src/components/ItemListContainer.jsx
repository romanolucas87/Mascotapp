import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/config";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const queryProducts = collection(firestore, "productsPets");
    getDocs(queryProducts)
      .then((snapshot) => {
        console.log("snap", snapshot);
        const productsCollection = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("prod", productsCollection);
        if (params.id) {
          const productsFilter = productsCollection.filter(
            (product) => product.category == params.id
          );
          console.log("producto", productsFilter);
          setProducts(productsFilter);
        } else {
          setProducts(productsCollection);
          console.log("pasas por aca", productsCollection);
        }        
      })
      .catch((e) => console.error(e))
      .finally(() => setIsLoading(false));
  }, [params]);

  if (isLoading) return <Loader />;
  return (
    <>
    <div className="p-3">
          <ItemList productList={products}></ItemList>
    </div>
    </>
  );
};

export default ItemListContainer;
