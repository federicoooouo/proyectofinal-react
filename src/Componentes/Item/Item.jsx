import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (

    <Link to={`/detalle/${producto.id}`}>
    <div key={producto.id}>
        <img src={producto.img} alt={producto.nombre} />
        <h2>{producto.nombre}</h2>
        <h2>{producto.precio}</h2>
        <h2>{producto.stock}</h2>
        <p>{producto.descripcion}</p>
    </div>
    </Link>
  )
}

export default Item