import './ItemDetailContainer.css'
import { useState ,useEffect } from 'react'
import { getproductById } from '../ListaProductos'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {
    const [productos, setProducts] = useState (null)
    const {itemId} = useParams()
    useEffect(() => {
        getproductById(itemId)
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])
    return(
        <div>
            <ItemDetail {...productos}/>
        </div>
    )
}
export default ItemDetailContainer