import { useCartContext } from "../context/CartContext"
import ItemCart from "./ItemCart";
const Cart = () =>{
    const{cart, totalPrice}= useCartContext();

    return(
        <>
            { cart.length === 0 && (
                <p>No hay elementos en el carrito</p>
            )}
            { cart.length > 0 && (
                <>
                {cart.map(product => <ItemCart key={product.id} product ={product}/>)     }
                <p>Precio total a Pagar ${totalPrice()}</p>    
                </>
            )}
        </>
    )
}

export default Cart