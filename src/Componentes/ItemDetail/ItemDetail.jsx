import React,{useState, useContext} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Contexto/CartContext'

const ItemDetail = ({producto}) => {

    const[carrito,setCarrito] = useState(false)

    const {agregarAlCarrito} = useContext(CartContext)

const agregarCarrito = (count) => {
    setCarrito(true)
    agregarAlCarrito(producto,count)
    
}


return (
    <div>
        <h1>{producto.nombre}</h1>
        <img src={producto.img} alt={producto.nombre} />
        <h3>{producto.precio}</h3>
        <h3>{producto.stock}</h3>
        <p>{producto.descripcion}</p>

        {carrito ?  <Link to={'/carrito'}>ir al carrito</Link> : <ItemCount initial={1} stock={producto.stock} agregarCarrito={agregarCarrito}/>
 }

    </div>
)
}

export default ItemDetail