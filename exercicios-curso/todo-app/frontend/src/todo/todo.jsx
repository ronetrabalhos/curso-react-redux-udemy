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
        this.handleSearch = this.handleSearch.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPeding = this.handleMarkAsPeding.bind(this)


        // Iniciando funções
        this.refresh();

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
             .then(resp => this.refresh())
    }

    // Marcar tarefa como realizada
    handleMarkAsDone(todo){
        
        // [ ...todo ] possui o elemento todo com todas as caracteristicas
        // [ done: true ] muda o valor deste atributo neste novo objeto que 
        // esta sendo criado.
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
             .then(resp => this.refresh(this.state.description))
    }

    // Voltar o estado da tarefa para não concluída (pendente)
    handleMarkAsPending(todo){
        Axios.put(`${URL}/${todo._id}`, {...todo, done: false })
             .then(resp => this.refresh(this.state.description))
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

    // Busca na lista
    // Feitas as alterações na função refresh(), basta passar para ela
    // o conteúdo da caixa de pesquisa e ela atualiza a lista
    handleSearch(){
        this.refresh(this.state.description)
    }


    // Pega a lista mais atualizada 
    // [ description = '' ] foi inserido para que possamos realizar 
    // busca na lista de tarefas
    refresh(description = ''){

        // Passamos a URL e passamos um filtro pedindo para ordenar 
        // pela data de criação em ordem decrescente
        // O último lançado aparecerá primeiro
        // O .then receberá a resposta e alterará o estado do this

        // Para que tenhamos a pesquisa no mesmo campo de inserção
        // é necessário alterar a função, para que o nodejs retorne
        // os elementos que buscamos. Para isso criamos a constante 
        // search. Ela será concatenada a URL.

        // No .then limpávamos a caixa após inserção [ description: '', ...] 
        // Porém, como a busca agora é realizada no mesmo campo, teremos 
        // que passar o estado description, visto que ele é declarado como 
        // parâmetro da função. Se for para limpar, não informe nada.

        const search = description ? `&description__regex=/${ description }/` : ''
        Axios.get(`${URL}?sort=-createAt${ search }`)
             .then(resp => this.setState( { ...this.state, description, list: resp.data } ) )

    }

    // remover elemento
    handleRemove(todo){
        Axios.delete( ` ${URL}/${todo._id}` )
             .then( resp => this.refresh(this.state.description) )
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
                    handleAdd = { this.handleAdd }
                    handleSearch = { this.handleSearch } />
                <TodoList 
                    list = { this.state.list }  
                    handleMarkAsDone = { this.handleMarkAsDone }
                    handleMarkAsPeding = { this.handleMarkAsPeding }
                    handleRemove = { this.handleRemove }/>
            </div>
        )
    }
}