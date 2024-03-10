import React,{useState,useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  
  const[productos,setProductos]= useState([]);
  
  const{categoriaId} = useParams()

  useEffect(() => {

    const fetchData = async () => {
      try{
        const response = await fetch("/productos.json");
        const data = await response.json()
        
        if(categoriaId){
          
          const filteredProducts = data.filter((p) => p.categoria == categoriaId)
          setProductos(filteredProducts)

        }else{
          setProductos(data)
        }


        
      }catch(error){
        console.log("error 404" + error) 

      }
    }

  fetchData()

  },[categoriaId])

  
  
  return (
    <div>
    
    
    
      {productos.length == 0 
      ?
      <h1>Buscando Nfts...</h1> 
      :
      <ItemList productos={productos}/>
}

  </div>
  )
}

export default ItemListContainer