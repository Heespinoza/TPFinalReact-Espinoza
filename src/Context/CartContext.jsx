import { createContext, useState } from "react";

export const cartContext = createContext ({ cart:[]});
export function CartContextProvider({children}){
    const [cart , setCart] = useState ([]);
    console.log(cart)

    function addItem(product, quantity){
        const ProducAdd = {...product, quantity}
        const newCart = [...cart]
        const InCart = newCart.find ((productos)=> productos.id === ProducAdd.id)
        
        if (InCart){
            InCart.quantity += quantity;

        }else{
            newCart.push (ProducAdd);
        }

        
        setCart (newCart) ;
        

    }

    const CantCart = () =>{
        return cart.reduce((acc, prod)=> acc + prod.quantity, 0);
    }

    const PrecioTotal = () =>{
        return cart.reduce((acc, prod)=> acc + prod.precio * prod.quantity, 0)
    }

    const DelCart = () => {
        setCart ([]);
    }

    function removeItem(idDelete) {
        setCart(cart.filter((prod) => prod.id !== idDelete));
      }
    return (
        <cartContext.Provider value ={ { 
            cart,
             setCart,
              addItem,
              CantCart,
              PrecioTotal,
              DelCart,
              removeItem
              } }  >
            {children}
        </cartContext.Provider>
    )
}