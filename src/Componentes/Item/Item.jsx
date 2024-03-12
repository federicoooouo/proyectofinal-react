import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../Item/Item.css"

const Item = ({producto}) => {
  return (

    <Link to={`/detalle/${producto.id}`}>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.img} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
            <p>{producto.descripcion}</p>
            <p>{producto.stock}</p>
            <p>${producto.precio}</p>
            
        </Card.Text>
        <Button to={`/detalle/${producto.id}`} >Conoce Mas!</Button>
      </Card.Body>
    </Card>
 
    </Link>


  )
}

export default Item