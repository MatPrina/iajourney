import React from 'react'
import "./style.css"

const Caixa = ({nome, valueInput, valueResposta}) => {

    return (
        nome === "Você" ? (
            <div id="caixa-entrada">
                <span className="caixa-nome">{nome}</span>
                <div id='caixa-conteudo-entrada'>{valueInput}</div>
            </div>
        ) : (
            <div id="caixa-saida">
                <span className="caixa-nome">{nome}</span>
                <div id='caixa-conteudo-saida'>{valueResposta}</div>
            </div>
        )
    )
}

export default Caixa