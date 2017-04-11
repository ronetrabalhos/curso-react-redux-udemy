console.log('[index.js] Webpack iniciado com sucesso!');

/* 
logger.js 

Quando se tratar dos meus arquivos, referencio com caminho relativo ./
Sendo do node_modules basta inserir o nome  :)
*/
const logger = require( './logger' );
logger.info("[index.js] Usando o padrão CommonsJS");