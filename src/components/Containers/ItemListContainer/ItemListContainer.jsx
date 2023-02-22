import React, { useEffect, useState} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const URL_BASE = "https://fakestoreapi.com/products";
  const URL_CAT = `${URL_BASE}/category/${id}`

  useEffect(() => {
    fetch(id ? URL_CAT : URL_BASE)
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => {
        console.log(error);
      })
      .finally(setLoading(false));
    },[id]);

/*  const getDatos = () => {
    return new Promise ((resolve, reject) => {
      if (data.length === 0) {
        reject(new Error("no hay datos"));
      }
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });    
  };

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
      console.log(datosFetched);
    } catch (err) {
      console.log(err)
    }
  }

  fetchingData();
*/

  return (
        <>
          {<>{loading ? <h1>Cargando...</h1> : <ItemList products={products} />}</>}
        </>
  )
}

export default ItemListContainer