import { useContext } from "react"
import { cartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"


const Cart = () => {
    const{cart, DelCart, CantCart, PrecioTotal   } = useContext(cartContext)
    const Vaciar = () => {
        DelCart();
    
    }
    
    return(
        <div>
            {cart.map((prod) => (
                 <div key= {prod.id}>
                <h3>{prod.nombre}</h3>
                <p>Precio Unitario: ${prod.precio}</p>
                <p>Precio total: ${prod.precio * prod.quantity}</p>
                <p>Cantidad: {prod.quantity}</p>
                </div>

            )

    
             )
            }
              {
                cart.length>0 ?
                <div>
                <h2> Precio Total: ${PrecioTotal()}</h2>
                <button onClick={Vaciar}>Vaciar</button>
                
                 <Link to='/checkout'>Comprar</Link> 
                </div>:
                <h2>El Carrito Esta Vacio</h2>
              }
            

            
        </div>
    )
   
}


export default Cart