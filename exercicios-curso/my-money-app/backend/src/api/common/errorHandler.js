const _ = require('lodash')

// O padrão de assinatura de uma middleware com express é:
// request, response e next (req, res, next)


module.exports = (req, res, next) => {
    
    //Pegando os erros reportados pelo node Restful
    const bundle = res.locals.bundle

    if(bundle.errors){
        const errors = parseErrors(bundle.errors) // errors é um array de erros
        res.status(500).json({errors})
    } else {
        next() // continua para o proximo middleware
    }
}


// Função que retorna um array de mensagens
const parseErrors = (nodeRestfulErrors) => {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}