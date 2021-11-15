import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar';
import Detalle from '../pages/Detalle';
import Home from '../pages/Home';

const AppRouter = () => {
    return (
        <>
         <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detalle" element={<Detalle />} />
        </Routes>
        </>
        
       
    )
}

export default AppRouter
