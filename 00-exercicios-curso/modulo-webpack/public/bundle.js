/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	console.log('Webpack iniciado com sucesso!');

	/* 
	logger.js 

	Quando se tratar dos meus arquivos, referencio com caminho relativo ./
	Sendo do node_modules basta inserir o nome
	*/
	const logger = __webpack_require__( 1 );
	logger.info("Usando o padrão CommonsJS");

/***/ },
/* 1 */
/***/ function(module, exports) {

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

/***/ }
/******/ ]);