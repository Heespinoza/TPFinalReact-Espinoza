import './ItemListContainer.css'
import { useState, useEffect } from 'react';

import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../Firebase/Firebasedb';
import { collection, where, query, getDocs } from 'firebase/firestore';

const ItemListContainer = ({greeting}) =>{
    const [productos, setProducts] = useState ([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()
     
    
    useEffect(()=> {
        setLoading(true)
         const collectionRef = categoryId
       
        ? query(collection(db, 'productos'), where('tipo','==',categoryId))
        : collection(db,'productos')
        
        
        getDocs(collectionRef).then(response=>{
            
                const FilterProduct= response.docs.map(doc =>{
                    const data = doc.data()
                    return{id: doc.id, ...data}
                })
                setProducts(FilterProduct);

            
            
        
        } )
        .catch(error=>{
            console.error(error)
        })
        .finally(() => {
            setLoading(false)
        }
        )
    }, [categoryId])
    return (
        <div className="container" >
            <h1>{greeting}</h1>
            
            <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer;