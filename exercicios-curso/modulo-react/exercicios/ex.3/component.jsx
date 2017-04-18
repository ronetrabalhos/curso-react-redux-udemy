import React from 'react'

//Componente baseado em função
//Por ser construído em um arquivo separado de onde será chamado
//é necessário exporta-lo (deixa-lo visivel para outros arquivos)

// ARROW FUNCTION
// Substitui a palavra function pelo sinal => 
// Remover os { } e o return e colocar tudo em uma única linha, 
// pois o return está implicito em uma Arrow Function
// Como nossas funções possuem mais uma linha, devemos tratá-las
// como expressão. Em resumo: tudo que estiver dentro de ( ) será 
// retornado na tela

export default () => ( 
    <h1> Componente utilizando Arrow Function! </h1>
)
    

// NOTA    
// Não consegui utilizar console.log com arrow function
// console.log('[component.js] - retornando o primeiro componente')
    
