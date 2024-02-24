import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({productos}) => {
  return (

    <Link to={`/detalle/${productos.id}`}>
    <div key={productos.id}>
        <img src={productos.img} alt={productos.nombre} />
        <h2>{productos.nombre}</h2>
        <h2>{productos.precio}</h2>
        <h2>{productos.stock}</h2>
        <p>{productos.descripcion}</p>
    </div>
    </Link>
  )
}

export default Item