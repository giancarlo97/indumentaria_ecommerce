import React, { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom"
import { CartContext } from '../context/CartContext'

const Checkout = () => {
    const [totalPrice, setTotalPrice] = useState(0);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    if (cart.length > 0) {
      setTotalPrice(
        cart
          .map((product) => product.price * product.quantity)
          .reduce((total, valor) => total + valor)
      );
    }
  }, [cart]);
  return (
    <>
        <div>
            <div>
                <div>Resúmen</div>
                <div>
                <h5>Total: ${totalPrice}</h5>
                <p>Para continuar haz click en el botón.</p>
                <Link to="/form">
                    Realizar compra
                </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Checkout