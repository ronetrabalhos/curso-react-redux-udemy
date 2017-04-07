/* Arquivo de configuração do webpack */
/* Este arquivo é executado no node */

const webpack = require('webpack')

/* Exports é utilizado para deixar as declarações desse módulo 
   visíveis fora deste arquivo  
   Aqui está declarado o ponto de entrada para a aplicação;
   Onde vai gerar a saída do arquivo javascript */

module.exports = {

    entry: './ex/index.js',             /* entrada */
    output: {                           /* saída */
        path: __dirname + '/public',    /* __dirname: variável de ambiente do node, que é o diretório atual */
        filename: './bundle.js'         /* algumas pessoas utilizam app.js a bundle */
    },

    devServer: {                        /* Dados sobre o servidor da aplicação */
        port: 8080,                     /* Porta */
        contentBase: './public'         /* Pasta onde está os arquivos, inclusive o bundle.js e o index.html*/

    }
}