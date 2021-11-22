import axios from "axios";
import React, { useEffect, useState } from "react";



import Producto from "./Producto";

const Productos = () => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
        console.log(res.data)

      } catch (err) {}
    };
    getProducts();
  }, []);
  
  
  
  return (
    <div className="prod__container">
      <h2>Categoria: categoria</h2>
        
      
      
      <div className="prod__main">
        {products.map((datos) => (
          <Producto datos={datos} key={datos._id} />
        ))}
      </div>
    </div>
  );
};

export default Productos;
