import Item from "./Item";
import { Link } from 'react-router-dom';
const ItemList= ({productList = []}) =>  {
    return (
        <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}>
        {productList.map((product) =>{
            return(
                <Link key={product.id} to={`/item/${product.id}`}>
                <Item info={product}/>
                     </Link>
            )
        })  

        }
        </section>
       
    );
};

export default ItemList;