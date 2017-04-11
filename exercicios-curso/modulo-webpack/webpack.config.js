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

    },

    module: {
        loaders: [{                     /* loaders são responsáveis por carregar os arquivos que resolverão nosso problemas, como o Babel*/
            test: /.js?$/,              /* tipo de arquivo que será carregado */
            loader: 'babel-loader',       /* qual loader iremos utilizar para a tarefa. Essa dependência deve instalada e referenciada no arquivo package.json */
            exclude: /node_module/,     /* queremos apenas que o Babel leia os js de nossa aplicação, por isso retiramos a pastanode_module  */
            query: {                    /* dentro de query definimos o que será interpretado pelo Babel interprete */
                presets: ['es2015']
            }
        }]
    }

}