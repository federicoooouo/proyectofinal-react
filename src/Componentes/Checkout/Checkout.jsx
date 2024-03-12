import React,{useContext, useState} from 'react'
import { collection,addDoc,updateDoc,doc,getDoc} from 'firebase/firestore'
import { db } from '../../firebase/config';
import { CartContext } from '../../Contexto/CartContext'
import ListGroup from 'react-bootstrap/ListGroup';


function Checkout() {

    const {carrito,totalCarrito,cantidadCarrito,vaciarCarrito} = useContext(CartContext)

const [nombre,setNombre] = useState("")
const [apellido,setApellido] = useState("")
const [telefono,setTelefono] = useState("")
const [email,setEmail] = useState("")
const [emailConfirmacion,setEmailConfirmacion] = useState("")
const [error,setError] = useState("")
const [ordenId,setOrdenId] = useState("")

const manejadorFormulario = (event) => {
    event.preventDefault()
    if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
        setError("Todos los campos son obligatorios")
        return;
    }
    if(email!== emailConfirmacion){
        setError("Las contraseñas no coinciden")
        return;
    }



    const orden ={
        items: carrito.map((producto) => ({
            id: producto.producto.id,
            nombre: producto.producto.nombre,
            cantidad: producto.cantidad

        })),
        total: totalCarrito(),
        fecha: new Date(),
        nombre,
        apellido,
        telefono,
        email

    }

    Promise.all(
        orden.items.map(async(producto) => {
            const productoRef = doc(db,"nfts",productoOrden.id);
            const productoDoc = await getDoc(productoRef)
            const stockActual = productoDoc.data().stockActual

            await updateDoc(productoRef, {
                stock: stockActual - productoOrden.cantidad
            })


        })
    )
    .then(() => {
        addDoc(collection(db,"ordenes"),orden)
        .then((docRef)=>{
            setError("")
            setOrdenId(docRef.id)
            vaciarCarrito()

        })
        .catch((error)=>{
            setError("algo no anda bien con la orden")
        })

    })
    .catch((error)=>{
        setError("no se pudo actualizar stock")
    })
}



return (
    <div>
        <ListGroup>
        <h1>Ingresa los datos</h1>

        <form onSubmit={manejadorFormulario}>
            
            {carrito.map((producto)=>(
            
                <div key={producto.producto.id}>
                
            <p>{producto.producto.nombre} x {producto.cantidad}</p>
                
                </div>
            ))}
    
            <div>
                <div>
                <ListGroup.Item>

                    <label> nombre </label>
                    <input name='nombre' type="text" onChange={(e)=>setNombre(e.target.value)}/>
                    </ListGroup.Item>

                </div>
                <div>
                <ListGroup.Item>

                    <label> apellido </label>
                    <input name='apellido' type="text" onChange={(e)=>setApellido(e.target.value)}/>
                    </ListGroup.Item>

                </div>

                <div>
                <ListGroup.Item>

                    <label> tel </label>
                    <input name='Telefono' type="text" onChange={(e)=>setTelefono(e.target.value)}/>
                    </ListGroup.Item>

                </div>

                <div>
                <ListGroup.Item>

                    <label> email </label>
                    <input name='Email' type="email" onChange={(e)=>setEmail(e.target.value)}/>
                    </ListGroup.Item>

                </div>

                <div>
                <ListGroup.Item>

                    <label> email confirmacion</label>
                    <input name='EmailConfirmacion' type="email" onChange={(e)=>setEmailConfirmacion(e.target.value)}/>
                    </ListGroup.Item>

                </div>

                <button type='submit'>completar compra</button>

                {error && <p>{error}</p>}

                {ordenId && (
                    <strong>
                        !gracias por la compra! el numero de orden es: {ordenId}
                    </strong>
                )}





            </div>

        </form>

</ListGroup>
    </div>
)
}

export default Checkout