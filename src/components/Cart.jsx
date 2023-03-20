import React, { useState, useContext} from 'react'
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";


const Cart = ({ product }) => {
  const {cart, deleteItem, addItem, data, setData } =useContext(CartContext);

  const [ orderId, setOrderId ] = useState(null);
  const [ nombre, setNombre ] = useState("");
  const [ email, setEmail ] = useState("");
  const [totalPagar, setTotalPagar ] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(ordersCollection, order).then(({id}) => setOrderId(id))
  };
  const order = {
    nombre,
    email,
  };

  const ordersCollection = collection(db, "ordenes")

  const finalizarCompra = (product) => {
    const ventasCollecition = collection(db,'ventas');
    addDoc(ventasCollecition,{
      
      items: [{product:'remera blanca'}],
      //item: {product:product.title},
      //total: {Pay:product.price},
      date:serverTimestamp()
    })
    .then(respuesta => console.log(respuesta.id))
    console.log(product);

    //actualizarStock(cart.id, cart.stock)
    //setCart([...cart, product])
  }

  /*const actualizarStock = (id,stockNuevo)=>{
    const updateStock = doc(db,'productos',id)
    updateDoc(updateStock,{stock:stockNuevo})
  }*/

  const handleActualizarStock = () => {
    actualizarStock(product.id, product.stock)
  }

  const total = cart.map((product)=>product.price*product.cantidad)
  setTotalPagar[total]
  const totalCart = total.reduce((total, item) => total + item, 0)


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
          {cart.map((product) => {
            return(
              <div>
                <div key={product.id}>
                  <div>
                    <img src={product.image} alt={product.title} />
                    <div>
                      <h1>Producto: {product.title}</h1>
                      <h3>Cantidad: {product.cantidad}</h3>
                      <h3>Precio Unidad: U$D{product.price}</h3>
                      <h3>Precio Subtotal: U$D{product.price*product.cantidad}</h3>
                    </div>
                  </div>
                  <Link to={'/cart'}>
                  <img src="src/assets/eliminar.png" alt="eliminar" onClick={()=> deleteItem(product.id)} />
                  <img src="src/assets/tildeOk.jpg" alt="" onClick={() => finalizarCompra(product.title)} />
                  </Link>
                </div>
              </div>
            );            
          })}
          {<>{totalCart > 0 ? <div>
                        <div>
                          <h2>TOTAL A PAGAR</h2>
                          <h2>U$D{totalCart}</h2>
                        </div>
                          </div>:<Link to='/cart'></Link>
          }
          </>}    
          <button onClick={() => finalizarCompra(product.id)}>Finalizar Compra</button>    
        </>
      )}
      <button onClick={handleActualizarStock}>Actualizar Stock</button>    
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