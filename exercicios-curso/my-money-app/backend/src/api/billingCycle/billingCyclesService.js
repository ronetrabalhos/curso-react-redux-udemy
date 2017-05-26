// Definição dos serviços rest

const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidator: true})

module.exports = BillingCycle