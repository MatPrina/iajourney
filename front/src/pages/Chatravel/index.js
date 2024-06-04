import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Caixa from './Caixa'
import openAI from 'openai'
import "./style.css"

const Chatravel = () => {
    
    const [input, setInput] = useState("")
    const [conversa, setConversa] = useState([])

    async function handleChat(input) {
        const response = await fetch(`http://localhost:5000/chatravel/` + input)
        const data = await response.json()
        return data
    }

    async function handleEnter(ev) {
        if(ev.key === "Enter") {
            setInput("")
            
            const chat = await handleChat(input)

            if(chat.erro != null) {
                const chaveErro = Math.floor(Math.random() * 10000)
                setConversa(state => [...state, {nome: "Chatravel", valueResposta: chat.erro, chave: chaveErro}])
                return
            }

            const chaveVoce = Math.floor(Math.random() * 10000)
            const chaveChat = Math.floor(Math.random() * 10000)
    
            setConversa(state => [...state, {nome: "Você", valueInput: chat.pergunta, chave: chaveVoce}])
            setConversa(state => [...state, {nome: "Chatravel", valueResposta: chat.resposta, chave: chaveChat}])
            
        }
    }

    return (
        <div id="chat-container">
            <Navbar />
            <div id="chat-content">
                <h1 id="chat-title">BEM VINDO AO CHATRAVEL SEU COLEGA DE VIAGEM</h1>
                <input 
                    type="text" 
                    id="chat-input" 
                    placeholder='Digite aqui...'
                    onKeyDown={(ev) => handleEnter(ev)}
                    onChange={(ev) => setInput(ev.target.value)}
                    value={input}
                />
                <div id="chat-gpt">
                    {conversa.map((mensagem) => {
                        return <Caixa 
                        key={mensagem.chave} 
                        nome={mensagem.nome} 
                        valueInput={mensagem.valueInput} 
                        valueResposta={mensagem.valueResposta}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Chatravel