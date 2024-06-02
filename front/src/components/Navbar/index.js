import React from 'react'
import logo from '../../assets/logotipoIAJOURNEY.jpg'
import titulo from '../../assets/tituloIAJOURNEY.jpg'
import './style.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav id="navbar">
            <Link to="/"><img src={titulo} alt="Título da IAJOURNEY" id="navbar-titulo"/></Link>
            <div id="navbar-links">
                <Link to="/clima" className='navbar-link'>CLIMA</Link>
                <Link to="/dicas" className='navbar-link'>DICAS</Link>
                <Link to="/sobre" className='navbar-link'>SOBRE</Link>
            </div>
           <Link to="/chat"><img src={logo} alt="Logo da IAJOURNEY" id="navbar-logo"/></Link>
        </nav>
    )
}

export default Navbar