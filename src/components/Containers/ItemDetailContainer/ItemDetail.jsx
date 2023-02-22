import React, {useState} from 'react'
import ItemCount from '../../ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({product}) => {
  const [showItemCount, setShowItemCount] = useState(true);

  const onAdd = (contador) => {
    setShowItemCount(false)
  };

  return (
    <>
      <img src={product.image} alt={product.title} />
        <h1>{product.title}</h1>
        <span>{product.description}</span>
        <h2>${product.price}</h2>
        {showItemCount ? (
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
      ) : (
        <Link to={'/cart'}>
          <button>Finalizar Compra</button>
        </Link>
      )}
    </>
  );
};

export default ItemDetail;