import { useState } from "react";

const ItemCount =({stock, initial, onAdd })=>{
    const [quantity, setQuantity] = useState (initial)
    const incremento = () =>{
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }
    const decreciente = () =>{
        if (quantity < stock){
            setQuantity(quantity-1)
        }
    }
    return (
        <div>
            <div>
                <button onClick={decreciente}>-</button>
                <h4>{quantity}</h4>
                <button onClick={incremento}>+</button>
            </div>
            <div>
                <button onClick={()=> onAdd(quantity)} disabled= {!stock}> Agregar al Carro</button>
            </div>
        </div>


    )
}
export default ItemCount;