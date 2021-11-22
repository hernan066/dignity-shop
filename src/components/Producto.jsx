import React from "react";
import { Link } from "react-router-dom";

const producto = ({datos}) => {
  
  
  return (
    <Link to={`/producto/${datos._id}`}>
        
    <div className="prod__grid">
      <div className="prod__hover">
        <img src={datos.img} alt="1" border="0" />
        <div className="prod__info">
          <p> {datos.title}</p>

          <p>{datos.price}</p>
        </div>
      </div>
    </div>
        </Link>
  );
};

export default producto;
