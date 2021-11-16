import React from 'react'
import {datos} from '../data/datos'
import Producto from './Producto'

const Productos = () => {
    return (
        
        <div>
            <h1>Productos</h1>
            <hr />
            
            <div className= "prod__main">
            
            {
                datos.map(datos => (
                    <Producto datos={datos} key={datos.id}/>
                    ))

            }
    </div>
        </div>
        
    )
}

export default Productos
