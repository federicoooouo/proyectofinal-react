import React from 'react'


const CarritoItem = ({producto,eliminarDelCarrito}) => {
return (
    <div>

            <h3>{producto.producto.nombre}</h3>

            <img src={producto.producto.img} alt={producto.producto.nombre}/>

            <p>cantidad:{producto.producto.cantidad}</p>

            <p>valor unidad: ${producto.producto.precio*producto.cantidad}</p>

            <button onClick={()=>eliminarDelCarrito(producto.producto.id)}>eliminar producto</button>






    </div>
)
}
export default CarritoItem