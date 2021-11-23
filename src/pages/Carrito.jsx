import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


const Carrito = () => {
  
    const cart = useSelector(state => state.cart)
  
    return (
    <>
      <Navbar />

      <div className="carrito__main">
        <h2>Carrito de compras</h2>
        <div className="carrito__container">
          <div className="carrito__productos">

          {
              cart.products.map((item)=>(

                <div className="carrito__producto">
                <div className="carrito__img">
                  <img src={item.img} alt={item.desc} />
                </div>
                <div className="carrito__info">
                  
                  <div className="carrito__col">
                  <h3>Producto</h3>
                  <i>{item.title}</i>
                  </div>
                  
                    <div className="carrito__col">
                        <h3>Precio</h3>
                        <p>${item.price}</p>
                    </div>
                  <div className="carrito__col">
                      <h3>Cantidad</h3>
                      <p>1</p>
                  </div>
                  <div className="carrito__col">
                      <h3>Borrar</h3>
                      <i className="far fa-times-circle"></i>
                  </div>
                </div>
              </div>
              ))
          }
          
          
          
          
          
          
          
          
          
          
          </div>
          
          
          
          
          
          
          <div className="carrito__totales">
            <h3>Resumen</h3>
            <hr />
            <div className="carrito__totales-sub">
            <p>Subtotal:</p><p>${cart.total}</p>

            </div>
            <hr />
            <div className="carrito__totales-to">

            <p>Total: </p><p>${cart.total}</p>
            </div>
            <button className="carrito__btn">Comprar</button>
          </div>
        </div>
        <Link to="/" >
        <i className="fas fa-arrow-left"></i>  Seguir comprando
        </Link>
      </div>
    </>
  );
};

export default Carrito;
