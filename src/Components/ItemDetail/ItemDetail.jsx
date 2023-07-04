import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../Context/CartContext'

const ItemDetail = ({id, nombre, descripcion, precio, stock, tipo, marca}) => {
   const [quantityAdded, setQuantityAdded] = useState (0)
   const {addItem} = useContext(cartContext)
   const handledOnAdd= (quantity) => {
    setQuantityAdded(quantity)
    const item ={
        id, nombre, precio
    }
    addItem(item,quantity)
   } 
    
    return (
        <article className='card'>
        <header className='card-title'>
            {nombre}
        </header>
        <section className='card-description'>
            
            <p>
                Marca: {marca}
            </p>
            <p className='card-description'>
                Descripcion: {descripcion}
            </p>
            <p className='card-price'>
                Precio: ${precio}
            </p>
        </section>
            <footer>
                {
                    quantityAdded > 0?(
                     <button><Link to='/cart'>Ir Al Carrito</Link></button>    
                    ) : (

                <ItemCount initial={1} stock={stock} onAdd={handledOnAdd} />
                )
            }
                </footer>
        </article>
    )
}

export default ItemDetail