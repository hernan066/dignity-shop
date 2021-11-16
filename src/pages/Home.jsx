import React from 'react'
import Slider from '../components/Slider'
import Productos from '../components/Productos'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Carrusel from '../components/Carrusel'


function Home() {
    return (
        <div>
           
           <Slider />
           <Productos />
           <Carrusel />
           <Newsletter />
           <Footer />
        </div>
    )
}

export default Home
