import React from 'react'
import logo1 from '../assets/logo1.jpg'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {

  const categorias = [
    { nombre: "Hombre", id: 0, ruta: "/categoria/hombre" },
    { nombre: "Dama", id: 1, ruta: "/categoria/dama" },
    { nombre: "Zapatillas", id: 2, ruta: "/categoria/calzado" },
    { nombre: "Accesorios", id: 3, ruta: "/categoria/accesorio" },
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