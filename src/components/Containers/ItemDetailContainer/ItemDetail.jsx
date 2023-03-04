import React, { useState, useContext} from 'react'
import ItemCount from '../../ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from "../../../context/CartContext"

const ItemDetail = ({product}) => {
  const [showItemCount, setShowItemCount] = useState(false);
  const { cart, addItem, IsInCart} = useContext(CartContext);

  let stock = 100;
  if(IsInCart(product.id)){
    const found = cart.find(item => item.id === product.id);
    stock = product.stock - found.cantidad;
  }else{
    stock = product.stock;
  }

  const onAdd = (contador) => {
    setShowItemCount(true);
    addItem(product, contador);
  };

  return (
    <>
      <img src={product.image} alt={product.title} />
        <h1>{product.title}</h1>
        <span>{product.description}</span>
        <h2>U$D{product.price}</h2>
        {!showItemCount ? (
        <ItemCount stock={100} initial={1} onAdd={onAdd} />
      ) : (
        <Link to={'/cart'}>
          <button>Finalizar Compra</button>
        </Link>
      )}
    </>
  );
};

export default ItemDetail;