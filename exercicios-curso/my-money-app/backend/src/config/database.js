const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney')

// Alterando / traduzindo as mensagens de erro

mongoose.Error.Messages.general.required = 
"O atributo '{PATH}' é obrigatório. "

mongoose.Error.Messages.Number.min =
"O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'. "

mongoose.Error.Messages.Number.max =
"O '{VALUE}' informado é menor que o limite mínimo de '{MAX}'. "

mongoose.Error.Messages.Number.enum =
"O '{VALUE}' não é válido para o atributo '{PATH}'. "