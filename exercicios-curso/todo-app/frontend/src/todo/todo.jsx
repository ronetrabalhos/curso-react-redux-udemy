// Import de biblioteca de terceiros
import React, { Component } from 'react'
import Axios from 'axios'

// Import de bibliotecas e componentes internos da app
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'


// Constante com a URL Base da api no backend
const URL = 'http://localhost:3003/api/todos'



// Classe Todo
export default class Todo extends Component{

    // Construtor
    constructor (props){
        super(props)

        // Definindo o estado inicial do objeto
        // Vale lembrar que props é somente leitura
        // Para alterar seu estado devemos utilizar 
        // o set.state
        // Para definir o state inicial ou ler o valor 
        // atual do estado, utilizamos this.state
        this.state = { description: '', list: [] }


        // Bind das funções
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    // ================================================
    // FUNÇÕES
    // ================================================
    
    // Adicionar nova tarefa
    handleAdd() {
        
        // A constante description receberá o valor
        // armazernado em this.state
        const description = this.state.description

        // Após utilizamos o Axios para realizar a tarefa de 
        // inserir o novo registro
        // Como o Axios é baseado em promise, é possível utilizar
        // o método then para recuperar a resposta da ação
        Axios.post(URL, { description })
             .then(resp => console.log('Funcionou: ' + description))
    }

    // Monitorar o campo de descrição da tarefa
    // recebendo como parâmetro o [e]vento do 
    // onChange
    handleChange(e){
        
        // utilizando o operador spreed pegamos os dados do estado 
        // atual (description e list), mas utilizaremos apenas o 
        // description e associaremos o seu valor a e.target.value
        this.setState( { ...this.state, description: e.target.value } )
    }



    // ================================================
    // FUNÇÃO PRINCIPAL
    // ================================================

    render(){
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'> </PageHeader>
                <TodoForm 
                    description = { this.state.description }
                    handleChange = { this.handleChange }
                    handleAdd = { this.handleAdd } />
                <TodoList />
            </div>
        )
    }
}