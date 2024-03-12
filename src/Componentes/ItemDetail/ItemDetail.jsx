import React,{useState, useContext} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.img} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
            <p>{producto.descripcion}</p>
            <p>{producto.stock}</p>
            <p>${producto.precio}</p>
            {carrito ?  <Link to={'/carrito'}>ir al carrito</Link> : <ItemCount initial={1} stock={producto.stock} agregarCarrito={agregarCarrito}/>}

        </Card.Text>
        
      </Card.Body>
    </Card> 

 

    </div>
)
}

export default ItemDetail