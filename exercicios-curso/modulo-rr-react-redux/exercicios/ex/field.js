import React, { Component } from 'react'

class Field extends Component{

    constructor(props){
        super(props)
        this.state = { value: props.inicialValue }

        // O comando abaixo é necessário, pois o .this, neste
        // contexto, possui um significado diferente do usual
        // Para que essa classe, refira-se a ela, quando 
        // alteramos o campo de texto, é necessário dizer
        // que o componente recebe ele mesmo através da 
        // função bind()
        this.handleChange = this.handleChange.bind(this)
    }

    // responsável por controlar mudandas no field
    // sempre que ocorrer alguma alteração no campo de texto
    // ele sincroniza as informações com o label associado

    handleChange(event){
        this.setState({ value: event.target.value })
    }

    render(){
        return (
            <div>
                <label> { this.state.value } </label> <br/>
                <input onChange = { this.handleChange } 
                       value = { this.state.value } />
            </div>
        )
    }

}


//Exportando o componente
export default Field