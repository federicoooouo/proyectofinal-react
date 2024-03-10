import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';   

const ItemDetailContainer = () => {

    const[producto,setProducto]= useState([]);

    const{id} = useParams();


    useEffect(() => {

    const fetchData = async () => {
        try{
        const response = await fetch("/productos.json");
        const data = await response.json()
        const product = data.find((p)=>p.id == id)
        setProducto(product);
        }catch(error){
        console.log("error 404 " +error) 

        }
    }

    fetchData()

    },[id])




    return (
    <div>
        
        <ItemDetail producto={producto}/>

    </div>
)
}

export default ItemDetailContainer