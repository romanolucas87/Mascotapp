import React, { useContext, useState } from 'react';
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [cart, setCart]= useState([]);

    const addProductToCart=(item, quantity)=>{
        if(isInCart(item.id)){
            setCart(cart.map(product =>{
                return product.id === item.id ? {...product, quantity : product.quantity+quantity} : product
            }));            
        }else{
            setCart([...cart, {...item, quantity}])
        }
    };


    const clearCart = () => setCart([]);
    const isInCart = (id)=>{ return cart.find(product=> product.id === id)? true: false;   }

    const removeProduct = (id)=> setCart(cart.filter(product => product.id !== id));

    console.log('carrito: ' , cart);
    return (
        <div>
            <CartContext.Provider value={{
                addProductToCart,
                clearCart,
                isInCart,
                removeProduct
            }}>
                {children}
            </CartContext.Provider>
        </div>
    )
}

export default CartProvider