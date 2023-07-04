
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { CartContextProvider } from './Context/CartContext';
import Cart from './Components/Cart/Cart';
import CheckOut from './Components/CheckOut/CheckOut';
import OrdenConfirm from './Components/OrdenConfirm/OrdenConfirm';

function App() {
  return (<div >
    <CartContextProvider>
    <BrowserRouter> 
    

      <NavBar /> 

      <Routes>
        <Route path='/' element ={<ItemListContainer/>} />
        <Route path='/category/:categoryId' element ={<ItemListContainer/>} />
        <Route path='/item/:itemId' element ={<ItemDetailContainer/>} />
        <Route path='/cart' element ={<Cart/>} />
        <Route path='/checkout' element ={<CheckOut/>} /> 
        <Route path='/orden-confirmada/:orderid' element ={<OrdenConfirm/>} />
        <Route path='*' element = {<h1>404 NOT FOUND</h1>
        } />
      </Routes>

      
      
      </BrowserRouter>
      </CartContextProvider>
  </div>)
  
}

export default App
