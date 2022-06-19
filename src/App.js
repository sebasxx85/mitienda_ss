import './App.css';
import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element = {<ItemListContainer greet = "Contenido Desde una Props "/>}/>
            <Route path="/" element = {<ItemDetailContainer greet = "Detalle Producto" />}/>                
          </Routes>
    </BrowserRouter> 
  </div>
  );
}


export default App;
