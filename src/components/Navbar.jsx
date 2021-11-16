import React from "react";
import { Link } from "react-router-dom";




const Navbar = () => {
  return (
   <nav className="nav__main">
       <div className="nav__wrapper">
           <div className="nav__left">
                <h1><Link to="/">-Dignity-</Link></h1>
           </div>
           <div className="nav__center">
                <ul className="nav__menu">
                    <li><Link to="/">Ropa Niño</Link></li>
                    <li><Link to="/">Ropa interior</Link></li>
                    <li><Link to="/">Accesorios</Link></li>
                    
                    
                </ul>
           </div>
           <div className="nav__right">
           <Link to="/login"><span><i className="far fa-user-circle"></i></span></Link>
           <Link to="/"><span><i className="fas fa-shopping-cart"></i></span></Link>
           
           </div>
           

       </div>

   </nav>
   
   
   
   
    
  );
};

export default Navbar;
