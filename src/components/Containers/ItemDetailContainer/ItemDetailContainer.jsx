import React, { useState, useEffect } from 'react'
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({ greeting }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const URL_BASE = "https://fakestoreapi.com/products";
  const URL_PROD = `${URL_BASE}/${id}`

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(URL_PROD);
        const data = await res.json();
        setProduct(data);
      } catch {
        console.log("error");
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <h1>{greeting}</h1>
      {<>{loading ? <h1>Cargando...</h1> :<ItemDetail product={product} />}</>}
    </>
  );
};

export default ItemDetailContainer