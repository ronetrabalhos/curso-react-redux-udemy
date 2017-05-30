const port = 3002

// Referência de Middlewares
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function(){
    console.log(`[ MY-MONEY-APP ] [ BACKEND ] Rodando na porta ${port}.`)
})

module.exports = server