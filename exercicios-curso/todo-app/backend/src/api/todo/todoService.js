const Todo = require('./todo')

// A linha abaixo cria uma API Rest padrão
Todo.methods(['get', 'post', 'put', 'delete'])

// Esta instrução retorna o arquivo alterado após
// realizar um PUT no registro
// Além disso ela faz a verificação das validações
// evitando que valores errados sejam inseridos 
// na atualização do registro
Todo.updateOptions({new: true, runValidators: true})


// Exportando
module.exports = Todo