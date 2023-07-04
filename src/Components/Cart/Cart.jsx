import { useContext } from "react"
import { cartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import "./Cart.css"

const Cart = () => {
    const{cart, DelCart, CantCart, PrecioTotal,removeItem   } = useContext(cartContext)
    const Vaciar = () => {
        DelCart();
    
    }
    
    return(
        <>
        <h1>Tu Carrito</h1>
  
        <table className="cartList">
          <thead className="cartList_head">
            <tr className="cartList_row">
              {/* <th>Miniatura</th> */}
              <th>Titulo</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Remover</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
                
            {cart.map((prod) => (
                 <tr key= {prod.id} className="cartList_row" >
                 <td>{prod.nombre}</td>
                <td>${prod.precio}</td>
                <td>{prod.quantity}</td>
                <td><button  onClick={() => removeItem(prod.id)}>X</button></td>
                <td>${prod.precio * prod.quantity}</td>
                {/* <p>Precio Unitario: ${prod.precio}</p>
                <p>Precio total: ${prod.precio * prod.quantity}</p>
                <p>Cantidad: {prod.quantity}</p> */}
                {/* onClick={Vaciar} */}
                </tr>
            

    
             
            ))}
            </tbody>
            </table>
              {
                cart.length>0 ?
                <div className="cartList_detail">
                <h2> Precio Total: ${PrecioTotal()}</h2>
                {/* <button onClick={Vaciar}>Vaciar</button> */}
                
                <button ><Link to='/checkout'>Comprar</Link></button>  
                </div>:
                <h2>El Carrito Esta Vacio</h2>
              }
              </>)}
            

            
        
    
   



export default Cart