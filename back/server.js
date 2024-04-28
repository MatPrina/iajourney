const express = require("express")
const cors = require("cors")

const server = express()
server.use(cors())

server.get("/hello-world", (req, res) => {
    res.send("<h1>Hello World!</h1>")
})

server.listen(5000, () => {
    console.log("Servidor foi iniciado na porta 5000")
})