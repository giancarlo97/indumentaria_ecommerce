import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [contador, setContador] = useState(initial);

    const subtract = () => {
        if (contador > 1) {
          setContador(contador - 1);
        }
    };
    
    const add = () => {
        if (contador < stock) {
          setContador(contador + 1);
        }
    };

    return (
        <>
            <h2>{contador}</h2>
            <button onClick={subtract}>-</button>
            <button onClick={add}>+</button>
            <button disabled={stock === 0} onClick={() => onAdd(contador)}>
                <span>{stock === 0 ? 'No hay stock' : 'Agregar al carrito'}</span>
            </button>
            <button onClick={() => {
                setContador(0);
            }}>Reset</button>
        </>
    );
};

export default ItemCount;