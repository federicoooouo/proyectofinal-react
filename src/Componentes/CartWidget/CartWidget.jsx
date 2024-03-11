import React, { useContext } from 'react'
import { CartContext } from '../../Contexto/CartContext'

const CartWidget = () => {

    const{cantidadCarrito} = useContext(CartContext)
  return (
    <div>

    <p>carrito</p>

    <p>{cantidadCarrito() == 0 ? null : cantidadCarrito()}</p>

    </div>
  )
}

export default CartWidget