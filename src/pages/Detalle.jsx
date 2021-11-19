import React from "react";
import Navbar from "../components/Navbar";

const Detalle = () => {
  return (
    <>
      <Navbar />
      <div className="detalle__main">
        <div className="detalle__img">
          <img src="https://i.ibb.co/722pd72/1.jpg" alt="3" border="0" />
        </div>
        <div className="detalle__info">
          <h1>Short Modal</h1>

          <div className="detalle__review">
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <p>0 review(s)</p>
          </div>
          <div className="detalle__infos">
            <h3>Precio</h3>
            <p>$300</p>
          </div>
          <div className="detalle__infos">
            <h3>Detalle del producto</h3>
            <p>Short de modal de niño</p>
          </div>
          <div className="detalle__infos">
            <h3>Talle</h3>
            <div className="detalle__talle">
              <span>S</span> <span>M</span>
              <span>L</span>
            </div>
          </div>
          <div className="detalle__infos">
            <h3>Metodo de pago</h3>
            <p>Efectivo - Trasferencia bancaria - Marcado pago</p>
          </div>
          <div className="detalle__infos">
            <h3>Metodo de envio</h3>
            <p>Consultar</p>
          </div>

          <button>Agregar al carrito</button>
        </div>
      </div>
    </>
  );
};

export default Detalle;
