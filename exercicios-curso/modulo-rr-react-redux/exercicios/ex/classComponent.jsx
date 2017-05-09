// O Component está entre chaves, pois o React tem export default 
// e component ou qualquer outro item é necessário colocar as chaves

import React, { Component } from 'react'


// Observe que vamos estender as class Component
// Outra maneira de importa o componet seria colocar [...] extends React.Component

// O componente react baseado em classe precisa ter no mínimo a função obrigatória
// render(). O render precisa retornar o .jxs, ou seja, o template.
// O retono pode ser null, mas precisar ter um retorno

// Uma outra diferença entre function e class é que o props em classe deve é acessado
// a partir do this. Ex.: this.props.value

// Leia observação sobre props descrita no documento



export default class ClassComponent extends Component {

    render(){
        return (
            <h1> { this.props.value } </h1>
        )
    }

}
