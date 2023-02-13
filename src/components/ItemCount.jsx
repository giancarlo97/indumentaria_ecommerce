import React from 'react';
import { useState } from "react";

const ItemCount = () => {

    const [contador, setContador] = useState(0);

    const sumar = () => {
        setContador(contador + 1);
    }

  return (
    <>
        <p>{contador}</p>
        <button onClick={sumar}>Sumar</button>
        <button onClick={() => {
            setContador(contador - 1);
        }}>Restar</button>
        <button onClick={() => {
            setContador(0);
        }}>Reset</button>
        <button>Comprar</button>
    
    </>
  )
}

export default ItemCount