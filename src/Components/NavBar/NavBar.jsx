import React from "react";
import CardWidget from '../CardWidget/CardWidget'
import './NavBar.css'
import { Link, NavLink } from "react-router-dom";
const NavBar= () => {
    return (
    <nav>
        
        <ul>
            <li ><Link to="/"> <h4>RAM COMPUTACION</h4></Link>
                 </li>
            
            <li><Link to="/">Inicio</Link> </li>
            <li><NavLink to={`/category/Procesadores`} >Procesadores</NavLink></li>
            <li><NavLink to={`/category/Mother`} >Mother</NavLink></li>
            <li><NavLink to={`/category/Graficas`} >Graficas</NavLink></li>
            <li><NavLink to={`/category/Almacenamiento`} >Almacenamiento</NavLink></li>
            <li><NavLink to={`/category/Componente`} >Componentes</NavLink></li>
            <li><NavLink to={`/category/Periférico`} >Periféricos</NavLink></li>
            <li> <Link to="">  <CardWidget /> </Link> </li>
        </ul>
       
    </nav>
    )
}
export default NavBar;