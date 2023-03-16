import React, { useState, useContext} from 'react'
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import { collection, addDoc, serverTimestamp, doc, updateDoc, getFirestore } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Table from './Table';
import Checkout from './Checkout';

const Cart = () => {
  const {cart, setCart} =useContext(CartContext);

  const [ orderId, setOrderId ] = useState(null);
  const [ nombre, setNombre ] = useState("");
  const [ email, setEmail ] = useState("");

  //const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(ordersCollection, order).then(({id}) => setOrderId(id))
  };
  const order = {
    nombre,
    email,
  };
  const ordersCollection = collection(db, "ordenes")

  const finalizarCompra = () => {
    const ventasCollecition = collection(db,'ventas2');
    addDoc(ventasCollecition,{
      comprador,
      items: [{nombre:'banana'},{nombre:'pera'}],
      total: 300,
      date:serverTimestamp()
    })
    .then(respuesta => console.log(respuesta.id))

    actualizarStock(cart.id, cart.stock)
  }

  const actualizarStock = (id,stockNuevo)=>{
    const updateStock = doc(db,'productos',id)
    updateDoc(updateStock,{stock:stockNuevo})
  }

  return (
    <>
      {cart.length ===0 ? (
        <>
          <h1>
            No agregaste productos.
            <Link to="/">COMPRAR</Link>
          </h1>
        </>
      ) :(
        <>
          {cart.map((producto) => {
            <h1 key={producto.id}>{producto.nombre}</h1>;
          })}
        </>
      )}
        
      <button onClick={finalizarCompra}>Finalizar Compra</button>
      <button onClick={actualizarStock}>Actualizar Stock</button>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setNombre(e.target.value)} />
        <input type="text" onChange={(e) => setEmail(e.target.value)}/>
        <button type="submit">Enviar</button>
      </form>
      <p>Numero de Orden: {orderId}</p>
      
    </>
  )
};

export default Cart;