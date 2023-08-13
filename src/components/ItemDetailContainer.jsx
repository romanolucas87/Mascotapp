import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react";
const productsPets = { 
      id: 1, 
      pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_7LgJTvk4V_MrST7q6ML-0egMJb0P7bTAg&usqp=CAU",
      title:"Correa para perro", description:"Loren Ipsum", price:1500
    }


export const ItemDetailContainer = () =>{
    
    const[data, setData] = useState([]);
    
    useEffect(() => {
        const getData = new Promise(resolve=> {
            setTimeout(()=>{
                resolve(productsPets)
            }, 3000)
        })
        getData.then(res=> setData(res));
    }, []
    )
        return (
        <ItemDetail data={data}/>
    )
}

export default ItemDetailContainer;