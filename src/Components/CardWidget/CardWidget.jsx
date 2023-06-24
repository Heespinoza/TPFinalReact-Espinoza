import { useContext } from 'react';
import card from './Iconcard/card.svg'
import { cartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
const CardWidget = () => {
    const{CantCart} =useContext(cartContext)
    return <div>
        <Link to="/cart" > <img src={card} alt="card widget" to="/cart"/>
        <span>{CantCart()}</span>
        </Link>
       
 
    </div>
}
export default CardWidget;