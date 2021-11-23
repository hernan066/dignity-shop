import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


const Carrito = () => {
  return (
    <>
      <Navbar />

      <div className="carrito__main">
        <h2>Carrito de compras</h2>
        <div className="carrito__container">
          <div className="carrito__productos">

          <div className="carrito__producto">
            <div className="carrito__img">
              <img src="https://i.ibb.co/722pd72/1.jpg" alt="img" />
            </div>
            <div className="carrito__info">
              
              <div className="carrito__col">
              <h3>Producto</h3>
              <i>Short modal</i>
              </div>
              
                <div className="carrito__col">
                    <h3>Precio</h3>
                    <p>$300</p>
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
          <div className="carrito__producto">
            <div className="carrito__img">
              <img src="https://i.ibb.co/722pd72/1.jpg" alt="img" />
            </div>
            <div className="carrito__info">
              
              <div className="carrito__col">
              <h3>Producto</h3>
              <i>Short modal</i>
              </div>
              
                <div className="carrito__col">
                    <h3>Precio</h3>
                    <p>$300</p>
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
          <div className="carrito__producto">
            <div className="carrito__img">
              <img src="https://i.ibb.co/722pd72/1.jpg" alt="img" />
            </div>
            <div className="carrito__info">
              
              <div className="carrito__col">
              <h3>Producto</h3>
              <i>Short modal</i>
              </div>
              
                <div className="carrito__col">
                    <h3>Precio</h3>
                    <p>$300</p>
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
          </div>
          
          
          
          
          
          
          <div className="carrito__totales">
            <h3>Resumen</h3>
            <hr />
            <div className="carrito__totales-sub">
            <p>Subtotal:</p><p>$100</p>

            </div>
            <hr />
            <div className="carrito__totales-to">

            <p>Total: </p><p>$100</p>
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
