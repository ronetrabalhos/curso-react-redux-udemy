import React from 'react'

// TRABALHANDO COM PARÂMETROS (props)
// id, class, etc são propriedades de uma tag html
// os valroes dessas propriedades podem ser repassados
// por meio de propriedades (props)
//
// props.texto : texto é o nome da propriedade que deve ser 
// instanciado na página index.jsx


export default (props) => ( 
    <h1> { props.texto} </h1>
)