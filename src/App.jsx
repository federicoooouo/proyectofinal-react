import React from "react"
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer"
import Footer from "./Componentes/Footer/Footer"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ErrorNot from "./Componentes/ErrorNot/ErrorNot"
import ItemCount from "./Componentes/ItemCount/ItemCount"


function App() {


  return (
    <>


<BrowserRouter>
<NavBar/>


<Routes>

  <Route path='/' element={<ItemListContainer greeting={"Tienda de Nfts"}/>}/>
  <Route path='/detalle/:idProducto' element={<ItemDetailContainer/>}/>
  <Route path='/contador' element={<ItemCount initial={1} stock={12}/>}/>
  
  <Route panth='*'element={<ErrorNot/>}/>


</Routes>




      
<Footer/>

</BrowserRouter>


    



    </>
  )
}

export default App
