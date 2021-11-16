import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="login__main">
      <div className="login__container">
        <div className="login__form">
          <h2>Login</h2>

          <form>
            <input type="text" placeholder="Ingresa tu correo" />
            <input type="password" placeholder="Ingresa tu contraseña" />
            <input type="password" placeholder="Repite tu contraseña" />
            <button>Enviar</button>
           <div className="login__register">

           <p>No tienes cuenta?</p> <Link to='/register'>Registrate</Link>
           </div>
           
          </form>
        </div>
      </div>
    </div>
  );
};
