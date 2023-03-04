import React, { useContext} from 'react'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {
  const { qty } = useContext(CartContext);
  return (
    <>
        <span className="material-symbols-outlined">shopping_cart</span>
        <p>{qty}</p>
    </>
  )
}

export default CartWidget