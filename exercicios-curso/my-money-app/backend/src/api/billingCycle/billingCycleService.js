// Definição dos serviços rest

const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})

// Criação da rota 'count' que conterá a quantidade de registros
// persistentes no banco de dados
BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if(error){
            res.status(500).json({ errors : [error] })
        }
        else {
            res.json({ value })
        }
    })
})


module.exports = BillingCycle