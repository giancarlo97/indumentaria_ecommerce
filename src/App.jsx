import React from "react";
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/Containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/Containers/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/categoria/:id" element={<ItemListContainer />} />
          <Route exact path="/producto/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="*" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
