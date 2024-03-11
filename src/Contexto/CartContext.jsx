import React,{useState,createContext} from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => {

    const[carrito,setCarrito] = useState([])

    
    const agregarAlCarrito = (producto,cantidad) =>{

        const productoSelect = carrito.findIndex(prod => prod.producto.id == producto.id)
        
        if(productoSelect == -1){
            setCarrito([...carrito,{producto,cantidad}])
        }else{ 
            const newCarrito = [...carrito] 
            newCarrito[productoSelect].cantidad += cantidad
            setCarrito(newCarrito)
        }

    }





    const vaciarCarrito = () =>{
        setCarrito([])

    }
    const cantidadCarrito = () =>{
        
        const totalQuantity = carrito.reduce((total,item) => total+item.cantidad,0)
        return totalQuantity

    }
    const totalCarrito = () =>{
        const totalPrice = carrito.reduce((total,item) => total + (item.producto.precio * item.cantidad),0)
        return totalPrice
    }


    return(
        <CartContext.Provider value={{
            carrito,
            agregarAlCarrito,
            vaciarCarrito,
            cantidadCarrito,
            totalCarrito
            
        }}>
            {children}
            
        </CartContext.Provider>
    )
}

export default CartProvider