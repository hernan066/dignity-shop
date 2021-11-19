import React from 'react'
import Slider from '../components/Slider'

import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Carrusel from '../components/Carrusel'
import ProductosSlider from '../components/ProductosSlider'
import Navbar from '../components/Navbar'
import Whastapp from '../components/Whastapp'




function Home() {
    return (
        <div>
           <Whastapp />
           <Navbar />
           <Slider />
           
           <ProductosSlider />
           
           <Carrusel />
           <Newsletter />
           <Footer />
        </div>
    )
}

export default Home
