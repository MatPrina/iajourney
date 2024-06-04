const express = require("express")
const cors = require("cors")
const connectDB = require("./db")
const openAI = require("openai")

const server = express()
server.use(cors())

let db;
connectDB().then((connection) => {
  db = connection;
});

// Middleware para garantir que a conexão foi estabelecida
server.use((req, res, next) => {
  if (!db) {
    return res.status(500).send('Erro ao conectar ao banco de dados');
  }
  req.db = db
  next();
});

server.get("/hello-world", (req, res) => {
    res.send("<h1>Hello World!</h1>")
})

const openai = new openAI({/*Chave aqui*/})

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


server.get("/consultar", (req, res) => {
    const query = "SELECT * FROM chat"

    db.query(query, (err, results) => {
        if (err) {
          console.error('Erro ao buscar dados:', err)
          res.status(500).send('Erro ao buscar dados.')
          return
        }
        res.status(200).json(results)
      })
})

server.get("/chatravel/:pergunta", async (req, res) => {
    const pergunta = req.params.pergunta
    const query = "INSERT INTO chat (pergunta, resposta) VALUES (?, ?)"

    const verificado = verificarEntradaViagens(pergunta)

    if(!verificado) {
        res.status(400).json({erro: "Não sei sobre esse assunto..."})
        return
    }

    const resposta = await gpt(pergunta)

    db.query(query, [pergunta, resposta], (err, results) => {
        if(err) {
            res.status(500).send({erro: "Erro ao inserir dados..."})
            return
        }
        res.status(200).json({pergunta: pergunta, resposta: resposta})
    })
})

server.listen(5000, () => {
    console.log("Servidor foi iniciado na porta 5000")
})
