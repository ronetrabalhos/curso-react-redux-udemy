// Definição dos serviços rest

const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')


BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})

// Aplicando o middleware para tratamento de erro
BillingCycle.after('post', errorHandler)
            .after('put',  errorHandler)



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

// Criação da rota / serviço para retornar o sumário de todos 
// os ciclos de pagamento.
// Valor consolidado de tudo que foi cadastrado no bd
BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate({
        $project: { credit : {$sum: "$credits.value"}, 
                    debt  : {$sum: "$debts.value"} }
    }, {
        $group: { _id : null, 
                credit: {$sum: "$credit"}, 
                debt : {$sum: "$debt"}  }
    }, {
        $project: { _id: 0, 
                 credit: 1, 
                 debt  : 1}
    }, (error, result) => {
        if(error){
            res.status(500).json({ errors : [error] })
        }
        else {
            res.json( result[0] || {credit: 0, debt: 0} )
        }
    } )
})


module.exports = BillingCycle