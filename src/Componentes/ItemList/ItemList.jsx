import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos}) => {

    return(     
        <>
        {
            productos.map((productos)=>{
                return(                
                    <Item productos={productos}/>
                )
            })
        }
        
        
        </>


    )
    }
export default ItemList