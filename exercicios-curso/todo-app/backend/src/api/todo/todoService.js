const Todo = require('./todo')

// A linha abaixo cria uma API Rest padrão
Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({new: true, runValidators: true})


// Exportando
module.exports = Todo