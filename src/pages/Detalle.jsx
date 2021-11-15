import React from 'react'

const Detalle = () => {
    return (
        <div className="detalle__main">
            <div className="detalle__img">
            <img src="https://i.ibb.co/0jsbxCY/1-2.jpg" alt="3" border="0"/>
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
               
               
               <h2>$300</h2>
               <h3>Detalle del producto</h3>
               <p>Short de modal de niño</p>
               
                <h3>Talle</h3>
                <div className="detalle__talle">
                <span>S</span> <span>M</span><span>L</span>
                </div>
                <h3>Metodo de pago</h3>
                <p>Efectivo - Trasferencia bancaria - Marcado pago</p>
                <h3>Metodo de envio</h3>
                <p>Consultar</p>
               
               
               <button>Agregar al carrito</button>
            </div>

            
        </div>
    )
}

export default Detalle
