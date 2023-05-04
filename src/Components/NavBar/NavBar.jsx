import React from "react";
import CardWidget from '../CardWidget/CardWidget'
import './NavBar.css'
const NavBar= () => {
    return (
    <nav>
        
        <ul>
            <li > <h4>RAM COMPUTACION</h4>
                 </li>
            <li><a href="">Mother Boards</a> </li>
            <li><a href="">Micro procesadores</a></li>
            <li><a href="">Ram</a></li>
            <li><a href="">Discos</a></li>
            <li><a href="">Gabinetes</a></li>
            <li> <a href="">  <CardWidget /> </a> </li>
        </ul>
       
    </nav>
    )
}
export default NavBar;