import React from 'react'
import Slider from '../components/Slider'

import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Carrusel from '../components/Carrusel'
import ProductosSlider from '../components/ProductosSlider'




function Home() {
    return (
        <div>
           
           <Slider />
           
           <ProductosSlider />
           
           <Carrusel />
           <Newsletter />
           <Footer />
        </div>
    )
}

export default Home
