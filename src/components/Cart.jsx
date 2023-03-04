import React from 'react'
import { useState } from 'react'
import { useContext } from "react";
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
  const {cart, setCart} =useContext(CartContext);

  const [nombre, setNombre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    nombre === "" ? alert("No ingreso datos") : alert(nombre);

    console.log("Enviando" + " " + nombre);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setNombre(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    </>
  )
};

export default Cart;