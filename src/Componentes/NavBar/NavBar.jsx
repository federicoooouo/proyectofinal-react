import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
              <Link to={'/'}>Inicio</Link>

        </li>
        <li>
              <Link>NFts</Link>

        </li>
        <li>

              <Link to={'/detalle'}>detalle</Link>
        </li>
        <li>

              <Link>Acerca de</Link>
        </li>
      </ul>
      
    </div>
  )
}

export default NavBar