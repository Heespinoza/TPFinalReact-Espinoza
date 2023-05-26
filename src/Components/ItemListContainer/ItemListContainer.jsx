import './ItemListContainer.css'
import { useState, useEffect } from 'react';
import { getproducts } from '../ListaProductos';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) =>{
    const [productos, setProducts] = useState ([])
    const {categoryId} = useParams()
    console.log (categoryId)
    useEffect(()=> {
        
        
        getproducts().then(response=>{
            if(categoryId){
                const FilterProduct= response.filter(prod => prod.tipo === categoryId);
                setProducts(FilterProduct);

            }else{
            setProducts(response)
        }
        } )
        .catch(error=>{
            console.error(error)
        })
    }, [categoryId])
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer;