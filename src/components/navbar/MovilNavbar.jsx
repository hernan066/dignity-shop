import React from 'react'
import { Link } from 'react-router-dom'

const MovilNavbar = () => {
    return (
        <>
        <div className="movilNav__overlay"></div>
        <div className="movilNav__main">
          
          
           <h2>Shop</h2>
           <ul className="movilNav__menu">
                    <li><Link to="/">Ropa Niño</Link></li>
                    <li><Link to="/">Ropa interior</Link></li>
                    <li><Link to="/">Accesorios</Link></li>
                    <li><Link to="/">Mi cuenta</Link></li>
                    
                    
                </ul>
                
            
        </div>
        </>
        
    )
}

export default MovilNavbar
