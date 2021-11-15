import React from "react";

const producto = ({datos}) => {
  return (
    <div className="prod__grid">
      <div className="prod__hover">
        <img src={datos.imagen} alt="1" border="0" />
        <div className="prod__info">
          <p> {datos.nombre}</p>

          <p>$300</p>
        </div>
      </div>
    </div>
  );
};

export default producto;
