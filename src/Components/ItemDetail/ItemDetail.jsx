import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, nombre, descripcion, precio, stock, tipo, marca}) => {
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad Agregada', quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail