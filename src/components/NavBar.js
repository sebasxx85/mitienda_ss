import './navbar.css';
import CartWidget from './CartWidget';
import React from 'react';


function NavBar() {

   function MiClick() {
       console.log("Click");
   } 

  return (
    <div className="nav-bar">
        <ul>
           <li onClick = {MiClick} >Inicio</li> 
           <li onClick = {MiClick} >Productos</li> 
           <li onClick = {MiClick} >Ofertas</li> 
           <li onClick = {MiClick} >Acerca de</li> 
           <li> <CartWidget/> </li>
        </ul>
    </div>
  );
}

export default NavBar;