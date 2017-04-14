const webpack = require('webpack')

module.exports = { 
    
    entry: './exercicios/ex/index.jsx',
    output: {
        path: __dirname +'/public',
        filename: './bundle.js'
    },

    devServer: {
        port: 8080,
        contentBase: './public/',
    },

    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    } //fim module

}// fim modules.webpack