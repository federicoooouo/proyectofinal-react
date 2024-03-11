import React from 'react'


const CarritoItem = (producto,eliminarItem) => {
return (
    <div>

            <h3>{producto.producto.nombre}</h3>

            <img src={producto.producto.img} alt={producto.producto.nombre}/>

            <p>cantidad:{producto.producto.cantidad}</p>

            <p>valor unidad: ${producto.producto.precio * producto.cantidad}</p>




    </div>
)
}
export default CarritoItem