import React, { useEffect, useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Table = () => {
    const { cart, setCart, setQnt } = useContext(CartContext);

  const deleteProduct = (index) => {
    setCart(cart.filter((product, i) => i !== index));
  };

  useEffect(() => {
    setQnt(
      cart
        .map((product) => product.quantity)
        .reduce((total, valor) => total + valor)
    );
  }, [cart, setQnt]);
  return (
    <>
    <div>
      <div>
        <h1>Carrito</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th scope="col">Cantidad</th>
            <th scope="col">Artículo</th>
            <th scope="col">Precio</th>
            <th scope="col">Total</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.quantity}</th>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>${item.quantity * item.price}</td>
              <td>
                <button
                  onClick={() => deleteProduct(index)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Table