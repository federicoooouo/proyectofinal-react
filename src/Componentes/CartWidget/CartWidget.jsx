import React, { useContext } from 'react'
import { CartContext } from '../../Contexto/CartContext'
import "../CartWidget/Cartwidget.css"

const CartWidget = () => {

    const{cantidadCarrito} = useContext(CartContext)
  return (
    <div>

    <p className='carritoProd'>Productos:
    </p>

    <p className='carritoProd'>{cantidadCarrito() == 0 ? null : cantidadCarrito()}</p>

    </div>
  )
}

export default CartWidget