import React, {useContext} from 'react'
import { CartContext } from '../../Contexto/CartContext'
import { Link } from 'react-router-dom'
import CarritoItem from '../CarritoItem/CarritoItem'

const Carrito = () => {

const{carrito,vaciarCarrito,eliminarItem,totalCarrito} = useContext(CartContext)


  return (
    <div>
      {carrito.length == 0
      ?
      <>
      <h1>No seleccionaste productos</h1>
      <Link to={"/"}>Ve al inicio</Link>
      </>
      
        :
        <>
        <h1>Nfts del carrito</h1>
        {carrito.map((p)=>(
          <CarritoItem key={p.id} producto={p} eliminarItem={eliminarItem}/>
      ))}
      
        <p>total: ${totalCarrito()}</p>
        <button onClick={vaciarCarrito}>Vaciar carrito</button>

        </>

      
      
      }




    </div>
  )
}

export default Carrito