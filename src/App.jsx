import { useState } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Welcome Users" />
    </>
  )
}

export default App
