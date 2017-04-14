import React from 'react'

//Componente baseado em função
//Por ser construído em um arquivo separado de onde será chamado
//é necessário exporta-lo (deixa-lo visivel para outros arquivos)

export default function(){
    console.log('[component.js] - retornando o primeiro componente')
    //O retorno será um componente react
    return <h1> Meu primeiro componente! </h1>
}