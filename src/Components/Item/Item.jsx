import { Link } from 'react-router-dom'
import './Item.css'
const Item = ({id, nombre,descripcion,imagen , precio, stock, tipo, marca}) => {
    return (
        <article className='card'>
            <header className='card-title'>
                {nombre}
            </header>
            <img src={imagen} alt={nombre} />
            <section className='card-description'>
                
                <p>
                    Marca: {marca}
                </p>
                
                <p className='card-price'>
                    Precio: ${precio}
                </p>
            </section>
            <footer >
                <Link className='card-button' to={`/item/${id}`}>Ver Mas</Link>
                
            </footer>
        </article>
    )
}
export default Item