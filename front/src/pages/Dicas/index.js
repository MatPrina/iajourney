import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import "./style.css"

const Dicas = () => {

    const [dica, setDica] = useState("")
    const dicas = [
        "Faça uma pesquisa detalhada",
        "Faça uma lista de bagagem inteligente",
        "Experimente a comida local",
        "Explore além dos pontos turísticos",
        "Mantenha-se flexível",
        "Converse com os habitantes locais",
        "Respeite a cultura local",
        "Mantenha-se seguro",
        "Registre suas memórias",
        "Seja sustentável"
    ]

    function sorteiaDica() {
        const index = Math.floor(Math.random() * 10)
        setDica(dicas[index])
    }

    useEffect(() => {
        sorteiaDica()
    }, [])


    return (
        <div id="dicas-container">
            <Navbar />
            <div id="dicas-content">
                <h1 id="dicas-title">FIQUE SABENDO</h1>
                <h2 id="dicas-texto">{dica}</h2>
                <button id="dicas-button" onClick={sorteiaDica}>OUTRA DICA</button>
            </div>
        </div>
    )
}

export default Dicas