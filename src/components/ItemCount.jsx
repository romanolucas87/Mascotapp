import {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import { PlusCircle, DashCircle} from "react-bootstrap-icons";



export const ItemCount = ({initial, stock, onAdd})=>{
    const[count, setCount]= useState(parseInt(initial))
    const decrease =()=>{
        setCount(count - 1);
    }
    const increase = () =>{
        setCount(count + 1);
    }
    useEffect(()=>{
        setCount(parseInt(initial))
    },[initial])
    return (
        <div className='counter'>
            <button disabled={count <= 1} onClick={decrease}><DashCircle size={15} color="blue"/></button>
            <span className="p-2">{count}</span>

            <button disabled={count >= stock} onClick={increase}><PlusCircle size={15} color="blue"/></button>
            <div>   
                <Button disabled={stock <= 0} onClick={()=> onAdd(count)} variant="secondary"> Agregar al Carrito</Button>{' '}
            </div>
        </div>
    )


}

export default ItemCount;