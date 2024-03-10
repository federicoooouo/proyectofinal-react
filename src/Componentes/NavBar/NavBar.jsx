import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
return (
<div>
<ul>
      <li>
            <NavLink to={'/'}>INICIO</NavLink>
      </li>
      <li>
            <NavLink to={'categoria/Groupies'}>GROUPIES</NavLink>
      </li>
      <li>
            <NavLink to={'categoria/Monkeys'}>MONKEYS</NavLink>
      </li>
      <li>
            <NavLink to={'categoria/Bear'}>BEARS</NavLink>
      </li>
      <li>
            <NavLink to={'categoria/Cyberpunk'}>CYBERPUNK</NavLink>
      </li>
</ul>
      <CartWidget/>
      
</div>
)
}

export default NavBar