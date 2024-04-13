import React from 'react'
import Navbar from '../../components/Navbar'
import logo from '../../assets/logotipoIAJOURNEY.jpg'
import "./style.css"

const Home = () => {
    return (
        <div id="home-container">
            <Navbar />
            <div id="home-content">
                <h1 id="home-title">ESTÁ INDO VIAJAR E NÃO SABE O QUE TEM DE BOM? <span id="home-title-color">ESTA NO LUGAR CERTO</span></h1>
                <div id="home-button">
                    <img src={logo} alt="Logo da IAJOURNEY" id="home-button-logo"/>
                    <p id="home-button-text">VENHA SABER MAIS SOBRE SEU DESTINO</p>
                </div>
            </div>
        </div>
    )   
}

export default Home