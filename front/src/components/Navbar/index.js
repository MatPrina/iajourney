import React from 'react'
import logo from '../../assets/logotipoIAJOURNEY.jpg'
import titulo from '../../assets/tituloIAJOURNEY.jpg'
import './style.css'

const Navbar = () => {
    return (
        <nav id="navbar">
            <img src={titulo} alt="Título da IAJOURNEY" id="navbar-titulo"/>
            <div id="navbar-links">
                <a href="#" className='navbar-link'>CLIMA</a>
                <a href="#" className='navbar-link'>DICAS</a>
                <a href="#" className='navbar-link'>SOBRE</a>
            </div>
            <img src={logo} alt="Logo da IAJOURNEY" id="navbar-logo"/>
        </nav>
    )
}

export default Navbar