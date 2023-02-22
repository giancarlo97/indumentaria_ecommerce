import React from 'react'
import logo1 from '../assets/logo1.jpg'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {

  const categorias = [
    { nombre: "Computacion", id: 0, ruta: "/categoria/electronics" },
    { nombre: "Joyeria", id: 1, ruta: "/categoria/jewelery" },
    { nombre: "Hombre", id: 2, ruta: "/categoria/men's clothing" },
    { nombre: "Dama", id: 3, ruta: "/categoria/women's clothing" },
  ];

  return (
    <>
      <header >
        <Link  to="/">
          <img  src={logo1} alt="lacoste" />
        </Link>

        <nav>
          {
            categorias.map((categoria) => {
              return (
                <NavLink
                  key={categoria.id}
                  to={categoria.ruta}
                >
                  {categoria.nombre}
                </NavLink>
              );
            })
          }
        </nav>

        <Link to="/cart">
          <CartWidget/>
        </Link>
        
      </header>
    
    </>
    
  )
}

export default NavBar