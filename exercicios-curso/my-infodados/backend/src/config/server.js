const port = 3004

// Referência de Middlewares
const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, function(){
    console.log(`[ MY-INFODADOS ] [ BACKEND ] Rodando na porta ${port}. `)
})
