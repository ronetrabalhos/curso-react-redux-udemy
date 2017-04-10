function info(var_text) {

    // observe que o parâmetro dentro de console.log está entre crases (backtick)
    // isso porque estamos utilizando o template string do EcmaScript 2015.
    // Neste formato, para referenciar uma variável, utilizamos ${nome_da_variavel}

    console.log( `INFO: ${var_text}` );
}

/*
Exportando o metodo info

module.exports exporta um objeto que possui nele o metodo info
o formato { nome_da_funcao } é a maneira reduzida de criar um objeto
adicionada pelo EcmaScript 2015. A maneira antiga seria { info : info }
*/

module.exports = { info }