import React from 'react'
import {datos} from '../data/datos'
import Producto from './Producto'

const Productos = () => {
    return (
        <div className= "prod__main">
                {
                    datos.map(datos => (
                        <Producto datos={datos} key={datos.id}/>
                        ))

                }
        </div>
    )
}

export default Productos
