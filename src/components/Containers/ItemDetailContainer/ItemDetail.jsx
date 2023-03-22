import React, { useState, useContext} from 'react'
import ItemCount from '../../ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from "../../../context/CartContext"

const ItemDetail = ({product}) => {
  const [showItemCount, setShowItemCount] = useState(false);
  const { addItem } = useContext(CartContext);

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
        <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
      ) : (
        <Link to={'/cart'}>
          <button>Finalizar Compra</button>
        </Link>
      )}
    </>
  );
};

export default ItemDetail;