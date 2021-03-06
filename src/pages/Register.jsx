import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { startRegister } from "../actions/auth";

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Requerido"),
  email: Yup.string().email("Email invalido").required("Requerido"),
  password: Yup.string().min(6, "6 caracteres minimo").required("Requerido"),
  rePassword: Yup.string().min(6, "6 caracteres minimo").required("Requerido").oneOf([Yup.ref("password")], "Las contraseñas deben ser iguales") ,

});




export const Register = () => {
  
  const dispatch = useDispatch();
  
  return (
    <div className="login__main">
      <nav className="navbarSimple__main">
            <h1><Link to='/'>-Dignity-</Link></h1>
        </nav>
      
      <div className="login__container">
        <div className="login__form">
          <h2>Registrate</h2>

          <Formik
            initialValues={{username:"",  email: "", password: "", rePassword: ""}}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
              
               const { username,  email, password } = values;
              dispatch(startRegister(username,  email, password)); 

              resetForm();
              
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  type="text"
                  name="username"
                  placeholder="Ingresa tu nombre"
                />
                
                <ErrorMessage name="email" component="p" className="login__error"/>
                <Field
                  type="email"
                  name="email"
                  placeholder="Ingresa tu correo"
                />
                
                <ErrorMessage name="email" component="p" className="login__error"/>
                
                <Field
                  type="password"
                  name="password"
                  placeholder="Ingresa tu contraseña"
                />
                <ErrorMessage name="password" component="p" className="login__error" />
                
                <Field
                  type="password"
                  name="rePassword"
                  placeholder="Repite tu contraseña"
                />
                <ErrorMessage name="rePassword" component="p" className="login__error" />

                <button type="submit" disabled={isSubmitting}>
                  Enviar
                </button>
              </Form>
            )}
          </Formik>
           <div className="login__register">

           <p>Ya tienes cuenta?</p> <Link to='/login'>Ingresa</Link>
           </div>
        </div>
      </div>
    </div>
  );
};
