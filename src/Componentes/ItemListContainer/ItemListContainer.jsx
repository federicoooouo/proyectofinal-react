import React,{useState,useEffect} from 'react'
import ItemList from '../ItemList/ItemList';


const ItemListContainer = ({greeting}) => {
  
  const[productos,setProductos]= useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try{
        const response = await fetch("./productos.json");
        const data = await response.json();
        setProductos(data);
      }catch(error){
        console.log("error 404" + error) 

      }
    }

  fetchData()

  },[])

  
  
  return (
    <div>
      <h1>{greeting}</h1>
    
    
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