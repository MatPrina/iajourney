import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import lupa from '../../assets/lupa.png'
import nuvem from '../../assets/clima/04d@2x.png'
import './style.css'

const Clima = () => {

    const [grau, setGrau] = useState("??")
    const [dia, setDia] = useState("")
    const [local, setLocal] = useState("")
    const chave = "786066d5d854fd6a91f03ae5c6030bb6"

    async function geoApi(localidade) {
        try {
            const lugarResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${localidade}&limit=5&appid=${chave}`);
            const lugarData = await lugarResponse.json();
            return lugarData[0];
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async function weatherApi(localidade) {
        setLocal("")
        const lugar = await geoApi(localidade)
        console.log(lugar, lugar.lat, lugar.lon)
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lugar.lat}&lon=${lugar.lon}&appid=${chave}`)
        .then(res => res.json())
        .catch(err => console.log(err))
        console.log(data)
        console.log(data.main.temp)
        setGrau(Math.floor(data.main.temp - 273.15) + "°")
    }

    useEffect(() => {
        const hoje = new Date();
        const diaDaSemana = hoje.getDay();

        switch (diaDaSemana) {
            case 0:
                setDia("Domingo");
                break;
            case 1:
                setDia("Segunda");
                break;
            case 2:
                setDia("Terça");
                break;
            case 3:
                setDia("Quarta");
                break;
            case 4:
                setDia("Quinta");
                break;
            case 5:
                setDia("Sexta");
                break;
            case 6:
                setDia("Sábado");
                break;
            default:
                setDia("Erro ao obter o dia da semana");
        }
    }, [])


    return (
        <div id="clima-container">
            <Navbar />
            <div id="clima-content">
                <div id="clima-search">
                    <img src={lupa} alt="Lupa" id="clima-search-lupa" onClick={() => weatherApi(local)}/>
                    <input type="text" id="clima-search-input" value={local} onChange={(ev) => setLocal(ev.target.value)}/>
                </div>
                <div id="clima-response">
                    <div id="clima-response-info">
                        <h1 id="clima-response-info-grau">{grau}</h1>
                        <h2 id="clima-response-info-dia">{dia}</h2>
                    </div>
                    <img src={nuvem} alt="Nuvem" id="clima-response-nuvem"/>
                </div>
            </div>
        </div>
    )
}

export default Clima