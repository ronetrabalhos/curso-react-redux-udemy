console.log('[index.js] - Webpack iniciado com sucesso!');

// ============================================================================

/* 
logger.js 

Quando se tratar dos meus arquivos, referencio com caminho relativo ./
Sendo do node_modules basta inserir o nome  :)
*/

const logger = require( './logger' );
logger.info("[index.js] - Usando o padrão CommonsJS");

// ============================================================================

/* 
duvidaCruel.js

Referenciando o arquivo para que ele seja carregado e apareça no bundle.js
quando for compilada a aplicação.
A aula 10 vem mostrar isso, se o arquivo não for referenciado ele não tem 
saída na aplicação.

Lembre-se sempre: o index.js é o arquivo de entrada. Todos os demais arquivos
são dependências deste.
*/

require('./duvidaCruel');

// ============================================================================

// Importando a classe Pessoa.js
import Pessoa from './pessoa'

// Instanciando Pessoa
const pessoa = new Pessoa('Guilherme');
console.log('[index.js] - ' + pessoa.toString());

// ============================================================================

// Objeto produto

const produto = {
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}


/* A função clona um objeto recebido como parâmetro e faz isso através do uso
   do operador spread (espalhar)
*/

function clonar (objeto){
    return { ...objeto }   // Como  retorno está entre { } ele retorna um objeto
}


// Criando um clone de produto e alterando somente o nome do produto

const novoProduto = clonar(produto);
novoProduto.nome = 'Caneta Bic Azul';

// Imprimindo o resultado
console.log (produto);
console.log (novoProduto);



// ============================================================================

// Importando o react

import 'react';

export default props => (
    <h1> Olá </h1>
);

console.log('[index.js] - React instanciado com sucesso!')