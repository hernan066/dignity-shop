import React from 'react'
import { Routes, Route } from "react-router-dom";
import Carrito from '../pages/Carrito';
//import Footer from '../components/Footer';
//import Navbar from '../components/Navbar';
import Detalle from '../pages/Detalle';
import EnConstruccion from '../pages/EnConstruccion';
import Home from '../pages/Home';
import { Login } from '../pages/Login';
import ProductosLista from '../pages/ProductosLista';
import { Register } from '../pages/Register';

const AppRouter = () => {
    return (
        <>
         
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto/:id" element={<Detalle />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/construction" element={<EnConstruccion />} />
        <Route path="/productos/:category" element={<ProductosLista />} />
       {/*  <Route path="/productos/:categoria" element={<ProductosLista />} /> */}
        </Routes>
       
        </>
        
       
    )
}

export default AppRouter
