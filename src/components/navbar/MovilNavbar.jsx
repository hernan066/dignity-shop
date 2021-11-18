import React from "react";
import { Link } from "react-router-dom";

const MovilNavbar = ({menuOn}) => {
  
  
   

  return (
    <div className="movilNav__container">
      <div className="movilNav__overlay "></div>
      <div className="movilNav__main  animate__animated animate__fadeInLeft">
      
        <h2>Shop</h2>
        
        <ul className="movilNav__menu">
          <li>
            <Link to="/">Ropa Niño</Link>
          </li>
          <li>
            <Link to="/">Ropa interior</Link>
          </li>
          <li>
            <Link to="/">Accesorios</Link>
          </li>
          <li>
          <i className="far fa-user-circle"></i><Link to="/">Mi cuenta</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovilNavbar;
