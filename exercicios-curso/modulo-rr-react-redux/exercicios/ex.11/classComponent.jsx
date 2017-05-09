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

    // Para manipular variáveis criaremos o construtor da classe
    // passando props e adiconaremos ao construtor o método super() 
    // passando props. O super() é obrigadtório 

    constructor(props){
        
        // Método obrigatório
        super(props)

        // Variável state é recebida por herança
        // Todo componente possui essa variável 
        // A ação abaixo inicializa o componente
        // atribuindo um valor passado por props
        // através da variável initialValue
        this.state = { value: props.initialValue }
    }


    // método para incrementar e decrementar o valor que está em state
    sum(delta){

        this.setState({value: this.state.value + delta })

    }


    render(){
        // NOTA IMPORTANTE: observe que o componente está envolto em uma
        // div. Isso é necessário pois, só é possível retornar apenas 
        // um componente por vez. Portanto, neste caso estamos retornando
        // uma div com toda estrutura do componente.

        // Para chamar a função sum() em onClick, temos que utilizar
        // Arrow Function, pois senão estaremos atribuindo um valor 
        // indefinido a uma valor inteiro, como é esperado.
        return (
            <div>
                <h1> { this.props.label } </h1>
                <h2> { this.state.value } </h2>

                <button onClick={ () => this.sum(1)}> Incrementar </button>
                <button onClick={ () => this.sum(-1)}> Decrementar </button>
                
            </div>
        )
    }
}
