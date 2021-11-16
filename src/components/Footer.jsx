import React from 'react'

const Footer = () => {
    return (
        <div className="footer__main">
            <div className="footer__nav">
                <div className="footer__col">
                    <h3>Informacion</h3>
                    <p>Como comprar</p>
                    <p>Envios</p>
                </div>
                <div className="footer__col">
                    <h3>Mi cuenta</h3>
                    <p>Registrarse</p>
                    <p>Ingresar</p>
                </div>
                <div className="footer__col">
                        <h3>Institucional</h3>
                        <p>Términos y condiciones</p>
                        <p>Politicas de privacidad</p>
                </div>
                <div className="footer__col">
                        <h3>Seguinos</h3>
                        <div className="footer__redes">
                        <i className="fab fa-instagram"></i> <p>Instagram</p>
                        </div>
                        <div className="footer__redes">
                        <i className="fab fa-facebook-square"></i><p>Facebook</p>
                        </div>
                      
                        
                </div>
            </div>
            
            
            <hr />
            <p>Design by Hernan Moneta - Copyright © 2021</p>
            
        </div>
    )
}

export default Footer
