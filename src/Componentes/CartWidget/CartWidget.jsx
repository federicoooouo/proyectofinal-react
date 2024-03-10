import React, { useContext } from 'react'
import { CartContext } from '../../Contexto/CartContext'

const CartWidget = () => {

    const{totalQuantity} = useContext(CartContext)
  return (
    <div>

    <p>carrito</p>

    <p>{totalQuantity == 0 ? null : totalQuantity}</p>

    </div>
  )
}

export default CartWidget