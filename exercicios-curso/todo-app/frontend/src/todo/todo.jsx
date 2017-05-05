import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component{

    // Construtor
    constructor (props){
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
    }
    
    // Função para adicionar nova tarefa
    handleAdd() {
        console.log(this)
    }

    // Função principal para renderizar os componentes.
    render(){
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'> </PageHeader>
                <TodoForm handleAdd = { this.handleAdd } />
                <TodoList />
            </div>
        )
    }
}