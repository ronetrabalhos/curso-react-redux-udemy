/*
    Midlleware para permitir que outros sites consuma a api
    Será adicionado cabeçalhos a resposta dizendo que aceita
    requisições vindas de outras origens 

    A api será liberada de forma global

    Aqui será um dos passos para atender a uma requisição.
    O CORS não está preocupado responder, mas de dizer o que 
    pode ser respondido, por isso chamamos o próximo middleware
    através do next()
*/

module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    
    // chamar o próximo middleware a ser executado
    next()
}