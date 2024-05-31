import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Caixa from './Caixa'
import openAI from 'openai'
import "./style.css"

const Chatravel = () => {
    const openai = new openAI({/*Chave aqui*/})
    
    const [input, setInput] = useState("")
    const [conversa, setConversa] = useState([])

    const palavrasChave = [
        "viagem", "viagens", "turismo", "turista", "destino", "destinos", "férias", "ferias",
        "passeio", "passeios", "rota", "rotas", "roteiro", "roteiros", "viajar", "viajante",
        "viajando", "viajantes", "passagem", "passagens", "passagens aéreas", "aéreo", "aérea",
        "avião", "aeroporto", "aeroportos", "hotel", "hotéis", "hospedagem", "reserva", "reservas",
        "estadia", "acomodação", "albergue", "albergues", "hostel", "hostels", "pousada", "pousadas",
        "hotelaria", "hospedarias", "camping", "acampamento", "motorhome", "trilha", "trilhas",
        "montanha", "montanhas", "praia", "praias", "cidade", "cidades", "país", "países",
        "internacional", "nacional", "turístico", "turística", "roteirização", "mochilão", "mochileiro",
        "mochilar", "road trip", "ecoturismo", "agência de viagens", "câmbio", "seguro viagem",
        "passaporte", "visto", "imigração", "bagagem", "bagagens", "companhia aérea", "companhias aéreas",
        "turistico", "viajem"
    ]

    function verificarEntradaViagens(input) {
        for (let palavraChave of palavrasChave) {
            if (input.toLowerCase().includes(palavraChave.toLowerCase())) {
                return true
            }
        }
        return false
    }

    async function gpt(input) {
        const completion = await openai.chat.completions.create({
            messages: [
                        {"role": "user", "content": input}
                    ],
            model: "gpt-3.5-turbo",
        })
        return completion.choices[0].message.content
    }

    async function handleEnter(ev) {
        if(ev.key === "Enter") {
            setInput("")

            const verificado = verificarEntradaViagens(input)

            if(verificado === false) {
                const chaveErro = Math.floor(Math.random() * 10000)
                setConversa(state => [...state, {nome: "Chatravel", valueResposta: "Não sei sobre este assunto...", chave: chaveErro}])
                return 
            }

            const resposta = await gpt(input)

            const chaveVoce = Math.floor(Math.random() * 10000)
            const chaveChat = Math.floor(Math.random() * 10000)

            setConversa(state => [...state, {nome: "Você", valueInput: input, chave: chaveVoce}])

            setConversa(state => [...state, {nome: "Chatravel", valueResposta: resposta, chave: chaveChat}])
            
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