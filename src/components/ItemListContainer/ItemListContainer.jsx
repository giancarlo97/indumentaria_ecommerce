import React from 'react'
import ItemCount from '../ItemCount'
import ItemList from './ItemList'
import data from "../../data.json";


const ItemListContainer = () => {
  
  const getDatos = () => {
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

  return (
    <>
      {
        <>
        <ItemList />
        <ItemCount />
        </>
      }
    </>
  )
}

export default ItemListContainer