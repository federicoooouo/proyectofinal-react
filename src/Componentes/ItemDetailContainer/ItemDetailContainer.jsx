import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'; 
import { db } from '../../firebase/config';  
import {doc,getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const[producto,setProducto]= useState([]);

    const{id} = useParams();


    useEffect(() => {
        
        
        const nuevoDoc = doc(db,"nfts",id)

        getDoc(nuevoDoc).then((res)=> {
            const data = res.data()
            const nuevoProducto = {id: res.id,...data}
            setProducto(nuevoProducto)

        })
    },[])



    return (
    <div>
        
        <ItemDetail producto={producto}/>

    </div>
)
}

export default ItemDetailContainer