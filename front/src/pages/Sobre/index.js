import React from 'react'
import Navbar from '../../components/Navbar'
import './style.css'

const Sobre = () => {
    return (
        <div id="sobre-container">
            <Navbar />
            <div id="sobre-content">
                <h1 id="sobre-titulo">Sobre nós</h1>
                <p className="sobre-texto">
                    Bem-vindo ao nosso site, onde transformamos suas ideias de viagem em realidade utilizando a tecnologia de ponta da API da OpenAI! Nosso objetivo é proporcionar a você uma experiência única e personalizada, ajudando a planejar viagens incríveis com sugestões, dicas e itinerários detalhados.
                </p>
                <h2 className="sobre-subtitulo">Nossa missão</h2>
                <p className="sobre-texto">
                    Acreditamos que viajar é uma das formas mais enriquecedoras de expandir horizontes e criar memórias inesquecíveis. Nossa missão é simplificar o planejamento das suas aventuras, oferecendo informações precisas e personalizadas, baseadas em inteligência artificial. Seja você um viajante experiente ou um iniciante, estamos aqui para tornar suas viagens mais fáceis e prazerosas.
                </p>
                <h2 className="sobre-subtitulo">Como funciona</h2>
                <p className="sobre-texto">
                    Utilizando a poderosa API da OpenAI, nosso site é capaz de compreender suas necessidades e preferências, fornecendo recomendações de destinos, atividades, restaurantes e acomodações. Basta nos dizer para onde você quer ir e quais são seus interesses, e nosso sistema fará o resto. Quer descobrir os segredos escondidos de uma cidade exótica ou encontrar o melhor restaurante local? Estamos aqui para ajudar!
                </p>
                <h2 className="sobre-subtitulo">Junte-se a nós</h2>
                <p className="sobre-texto">
                    Estamos empolgados em fazer parte da sua jornada e ajudar a transformar suas viagens em experiências inesquecíveis. Explore nosso site, descubra novos destinos e deixe-nos saber como podemos melhorar ainda mais sua experiência de viagem.
                </p>
            </div>
        </div>
    )
}

export default Sobre