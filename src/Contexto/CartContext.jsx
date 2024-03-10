import React,{useState,createContext} from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => {

    const[carrito,setCarrito] = useState([])
    const[total, setTotal] = useState(0)
    const[totalQuantity,setTotalQuantity] = useState()
    
    const agregarAlCarrito = (producto,cantidad) =>{

        console.log(producto)
        console.log(cantidad)

    }
    const eliminarProducto = () =>{

    }
    const vaciarCarrito = () =>{

    }
    const cantidadCarrito = () =>{

    }
    const totalCarrito = () =>{

    }


    return(
        <CartContext.Provider value={{
            carrito,
            total,
            totalQuantity,
            agregarAlCarrito
            
        }}>
            {children}
            
        </CartContext.Provider>
    )
}

export default CartProvider