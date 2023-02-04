import React from 'react'
import CartWidget from './CartWidget'
import logo1 from '../assets/logo1.jpg'

const NavBar = () => {
  return (
    <>
    <header>
        <img src={logo1} alt="shop" />
        <nav>
            <a href="">Remeras</a>
            <a href="">Pantalones</a>
            <a href="">Zapatillas</a>
            <a href="">Accesorios</a>
        </nav>
        <CartWidget/>
    </header>
    
    </>
    
  )
}

export default NavBar