import React from 'react'
import Navbar from '../../components/Navbar'
import Caixa from './Caixa'
import "./style.css"

const Chatravel = () => {
    return (
        <div id="chat-container">
            <Navbar />
            <div id="chat-content">
                <h1 id="chat-title">BEM VINDO AO CHATRAVEL SEU COLEGA DE VIAGEM</h1>
                <div id="chat-gpt">
                    <Caixa nome={"Você"}/>
                </div>
            </div>
        </div>
    )
}

export default Chatravel