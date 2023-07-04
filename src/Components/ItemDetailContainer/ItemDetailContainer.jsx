import './ItemDetailContainer.css'
import { useState ,useEffect, useContext } from 'react'
import { getproductById } from '../ListaProductos'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { cartContext } from '../../Context/CartContext'
import { db } from '../../Firebase/Firebasedb'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [productos, setProducts] = useState ([])
    const [loading, setLoading] = useState (true)

    const {itemId} = useParams()
    useEffect(() => {

        setLoading(true)
        const docRef = doc(db, 'productos', itemId)

        getDoc(docRef)
        .then(response => {
            const data = response.data()
            const FilterProduct = {id: response.id, ...data}
            setProducts(FilterProduct)
        })
        .catch(error => {
            console.error(error)
        })
        .finally (()=> {
            setLoading(false)
        })
    }, [itemId])
    return(
        <div >
            <ItemDetail {...productos}/>
        </div>
    )
}
export default ItemDetailContainer