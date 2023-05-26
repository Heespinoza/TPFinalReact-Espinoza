import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  return (<div >
    <BrowserRouter> 


      <NavBar /> 

      <Routes>
        <Route path='/' element ={<ItemListContainer/>} />
        <Route path='/category/:categoryId' element ={<ItemListContainer/>} />
        <Route path='/item/:itemId' element ={<ItemDetailContainer/>} />
        <Route path='*' element = {<h1>404 NOT FOUND</h1>
        } />
      </Routes>

      

      </BrowserRouter>
  </div>)
  
}

export default App
