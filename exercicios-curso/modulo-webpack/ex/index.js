console.log('[index.js] Webpack iniciado com sucesso!');

// ============================================================================

/* 
logger.js 

Quando se tratar dos meus arquivos, referencio com caminho relativo ./
Sendo do node_modules basta inserir o nome  :)
*/

const logger = require( './logger' );
logger.info("[index.js] Usando o padrão CommonsJS");

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