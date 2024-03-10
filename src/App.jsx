import React from "react"
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer"
import Footer from "./Componentes/Footer/Footer"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ErrorNot from "./Componentes/ErrorNot/ErrorNot"
import ItemCount from "./Componentes/ItemCount/ItemCount"
import Carrito from "./Componentes/Carrito/Carrito"
import CartProvider from "./Contexto/CartContext"

function App() {


  return (
    <>


<BrowserRouter>

<CartProvider>

  <NavBar/>


  <Routes>
  
  <Route path='/' element={<ItemListContainer/>}/>
  <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
  <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
  <Route path='/carrito' element={<Carrito/>}/>
  <Route panth='*'element={<ErrorNot/>}/>


  </Routes>




      
<Footer/>

</CartProvider>

</BrowserRouter>


    



    </>
  )
}

export default App
