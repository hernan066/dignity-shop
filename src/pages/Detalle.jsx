import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Navbar from "../components/Navbar";

import { publicRequest } from "../requestMethods";

const Detalle = () => {
  const location = useLocation();
  //console.log(location.pathname.split("/")[2])

  const id = location.pathname.split("/")[2];

   const [producto, setProducto] = useState({}); 

     useEffect(() => {
       
        const getProducto = async ()=>{
            try {
                const res = await publicRequest.get("/products/find/"+id);
                setProducto(res.data);
            } catch (error) {
                console.log(error)
                
            }
        }
       getProducto();
       

      
    }, [id]);  

  return (
    <>
      <Navbar />
      <div className="detalle__main">
        <div className="detalle__img">
         {/*  <img src="https://i.ibb.co/722pd72/1.jpg" alt="3" border="0" /> */}
          <img src={producto.img} alt="3" border="0" />
        </div>
        <div className="detalle__info">
          <h1>{producto.title}</h1>

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
            <p>${producto.price}</p>
          </div>
          <div className="detalle__infos">
            <h3>Detalle del producto</h3>
            <p>{producto.desc}</p>
          </div>
          <div className="detalle__infos">
            <h3>Talle</h3>
            <p>{producto.size}</p>
            <div className="detalle__talle">
             {/*  <span>S</span> <span>M</span>
              <span>L</span> */}
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
