import React, { useEffect, useState} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../../firebase/firebase"

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const productCollection = collection(db, 'productos')
  
  const q = id ? query(productCollection, where('category', '==', id)) : productCollection;

  useEffect(() => {
    getDocs(q)
    .then((result) => {
      const listProducts = result.docs.map((item) => {
        return {
          ...item.data(),
          id: item.id,
        };
      });
      setProducts(listProducts);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(setLoading(false));
    },[id]);

  return (
        <>
          {<>{loading ? <h1>Cargando...</h1> : <ItemList products={products} />}</>}
        </>
  )
}

export default ItemListContainer