import React from 'react'
import Navbar from '../../components/Navbar'
import lupa from '../../assets/lupa.png'
import nuvem from '../../assets/clima/04d@2x.png'
import './style.css'

const Clima = () => {
    return (
        <div id="clima-container">
            <Navbar />
            <div id="clima-content">
                <div id="clima-search">
                    <img src={lupa} alt="Lupa" id="clima-search-lupa"/>
                    <input type="text" id="clima-search-input"/>
                </div>
                <div id="clima-response">
                    <div id="clima-response-info">
                        <h1 id="clima-response-info-grau">14°</h1>
                        <h2 id="clima-response-info-dia">Terça</h2>
                    </div>
                    <img src={nuvem} alt="Nuvem" id="clima-response-nuvem"/>
                </div>
            </div>
        </div>
    )
}

export default Clima