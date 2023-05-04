import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
function App() {
  return (<div >
      <NavBar /> 
      <ItemListContainer greeting={'Bienvenidos a tu lugar en el mundo de la computacion'}/>
  </div>)
  
}

export default App
