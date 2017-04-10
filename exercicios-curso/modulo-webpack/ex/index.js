console.log('Webpack iniciado com sucesso!');

/* 
logger.js 

Quando se tratar dos meus arquivos, referencio com caminho relativo ./
Sendo do node_modules basta inserir o nome
*/
const logger = require( './logger' );
logger.info("Usando o padrão CommonsJS");