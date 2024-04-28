import React, { useState } from 'react'
import "./style.css"

const Caixa = ({nome, resposta, handleAPI}) => {

    function autoResize(textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = (textarea.scrollHeight) + 'px';
    }

    return (
        nome === "Você" ? (
            <div id="caixa-entrada">
                <span className="caixa-nome">{nome}</span>
                <textarea rows={1} type="text" id='caixa-conteudo-entrada' onChange={(ev) => autoResize(ev.target)}/>
            </div>
        ) : (
            <div id="caixa-saida">
                <span className="caixa-nome">{nome}</span>
                <div id='caixa-conteudo-saida'>{resposta}</div>
            </div>
        )
    )
}

export default Caixa