// Import de biblioteca de terceiros
import React from 'react'

// Import de bibliotecas e componentes internos da app
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

// Transformando para um componente funcional
export default props => (
    <div>
        <PageHeader name='Tarefas' small='Cadastro'> </PageHeader>
        <TodoForm />     
        <TodoList />                 
    </div>
)