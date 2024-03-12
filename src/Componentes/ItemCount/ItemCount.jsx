import React, {useState} from 'react'
import "../ItemCount/ItemCount.css"

const ItemCount = ({initial,stock,agregarCarrito}) => {

    const[contador,setContador] = useState(1);

    const decrementar = () => {
        if(contador > initial){
            setContador(contador - 1)
        }
    }
    const incrementar = () =>{
        if(contador < stock){
            setContador(contador+1)
        }
    }
    const agregarProducto = () =>{
        agregarCarrito(contador)
    }


    return (
    <div>

        <p>{contador}</p>
        <div className='countDetail'>
        <button onClick={decrementar}>-</button>
        <button onClick={agregarProducto}>agregar al carrito</button>
        <button onClick={incrementar}>+</button>
        </div>



    </div>
)
}

export default ItemCount