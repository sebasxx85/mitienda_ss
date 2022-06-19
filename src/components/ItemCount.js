import {React, useState} from 'react'

export default function ItemCount({ stock, initial}) {
    const [cant, setCount] = useState(initial);

    function suma() {
        if (stock <= cant) {
            setCount(cant +1);
        } 
    }

    function resta() {
        if (0 <= cant) {
           setCount(cant -1);
        }else{alert("El valor debe ser mayor a 0")}  
    }

  return (
    <>
    <button onClick={resta}>-</button>
    <span> 1 </span>
    <button onClick={suma}>+</button>
    <br/>
    <button>Agergar al carrito</button>
    </> 
  )
}

