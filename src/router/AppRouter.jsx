import React from 'react'
import { Routes, Route } from "react-router-dom";
//import Footer from '../components/Footer';
//import Navbar from '../components/Navbar';
import Detalle from '../pages/Detalle';
import Home from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

const AppRouter = () => {
    return (
        <>
         
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalle" element={<Detalle />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Routes>
       
        </>
        
       
    )
}

export default AppRouter
