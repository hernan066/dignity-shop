import React, { useState } from "react";
import { Link } from "react-router-dom";
import MovilNavbar from "./navbar/MovilNavbar";

import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

import {useSelector} from 'react-redux';

const Navbar = () => {
  const [menuOn, setMenuOn] = useState(false);
  const cart = useSelector(state => state.cart)

  const clickMenu = () => {
    setMenuOn(!menuOn);
    console.log("click");
  };
  
  
  
  return (
    <nav className="nav__main">
      <div className="nav__wrapper">
        <div className="nav__menu-icon">
          {menuOn ? (
            <i className="fas fa-times" onClick={clickMenu}></i>
          ) : (
            <i className="fas fa-bars" onClick={clickMenu}></i>
          )}
        </div>
        <div className="nav__left">
          <h1>
            <Link to="/">-Dignity-</Link>
          </h1>
        </div>
        <div className="nav__center">
          <ul className="nav__menu">
            <li>
              <Link to="/productos/ropa-nino">Ropa Niño</Link>
            </li>
            {
              <li>
                <Link to="/productos/ropa-interior">Ropa interior</Link>
              </li>
            }
            {
              <li>
                <Link to="/productos/mallas">Mallas</Link>
              </li>
            }
            <li>
              <Link to="/productos/accesorios">Accesorios</Link>
            </li>
          </ul>
        </div>
        <div className="nav__right">
          <Link to="/login">
            <span>
              <i className="far fa-user-circle"></i>
            </span>
          </Link>
          <Link to="/carrito">
            <span>
              <Badge badgeContent={cart.quantity} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </span>
          </Link>
        </div>

        {menuOn ? <MovilNavbar menuOn={menuOn} /> : null}
      </div>
    </nav>
  );
};

export default Navbar;
