/*
    Este arquivo será desenvolvido utilizando a api do mongoose 
    a partir do node-restful. 
    Neste arquivo descreveremos o comportamento de como as informações 
    deverão ser armazenadas no banco de dados
    Embora o mongo seja um banco sem schema, fazemos essas configurações
    para utilizarmos a validação dos dados, como dizer se ele é ou não
    requerido.
*/

// referencia ao node-restful
const restful = require('node-restful')

// referencia ao mongoose que está dentro do node-restful
const mongoose = restful.mongoose


//=========================================
// SCHEMAS
//=========================================

// Schema para Crédito
const creditSchema = new mongoose.Schema({
    name    : { type: String, required: true },
    value   : { type: Number, required: true, min: 0}
})

// Schema para Débito
const debtSchema = new mongoose.Schema({
    name    : { type: String, required: true },
    value   : { type: Number, required: true, min: 0},
    status  : { type: String,
                required: false,
                uppercase: true,
                enum: ['PAGO', 'PENDENTE', 'AGENDADO']
              }
})


// Schema para Ciclo de Pagamento
const billingCycleSchema = new mongoose.Schema({
    name    : { type: String, required: true },
    month   : { type: Number, required: true, min: 1, max: 12 },
    year    : { type: Number, required: true, min: 1970, max: 2100 },
    credits : [ creditSchema ],
    debts   : [ debtSchema ]    
})

// exportando o schema para que ele possa ser utilizado em outro módulo
// Nome do model    : BillingCycle
// Nome do schema   : billingCycleSchema
module.exports = restful.model('BillingCycle', billingCycleSchema)