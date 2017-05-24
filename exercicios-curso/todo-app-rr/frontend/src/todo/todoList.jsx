import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { markAsDone, markAsPending, remove } from './todoActions'

const TodoList = props => {

    // Função auxiliar
    const renderRows = () => {

        // Se props.list tiver dados, eles são carregados na constante
        // senão inicializamos um array vazio
        const list = props.list || []

        return list.map(todo => (
            <tr key = { todo._id } > 
                <td className = { todo.done ? 'markedAsDone' : '' } > 
                    { todo.description } 
                </td>
                <td>

                    <IconButton 
                        style = 'success' 
                        icon = 'check'
                        hide = { todo.done }
                        onClick = {() => props.markAsDone(todo)}>
                    </IconButton>

                    <IconButton 
                        style = 'warning' 
                        icon = 'undo'
                        hide = { !todo.done }
                        onClick = {() => props.markAsPending(todo)}>
                    </IconButton>

                    <IconButton 
                        style = 'danger' 
                        icon = 'trash-o'
                        hide = { !todo.done }
                        onClick = {() => props.remove(todo)}>
                    </IconButton>                    

                </td>
            </tr>
        ))
    }


    // Objeto que será retornado
    return (

        <table className='table'> 
            <thead> 
                <tr>
                    <th> Descrição </th>
                    <th className = 'tableActions'> Ações </th>
                </tr>
            </thead>

            <tbody> 
                { renderRows() }
            </tbody>
        </table>

    )
}

// mapeamento do estado do redux com as propriedades do objeto
// o todo.list refere-se ao todo + list declaro no arquivo ./main/reducers.js
const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = (dispatch) => 
      bindActionCreators( { markAsDone, markAsPending, remove }, dispatch)


// exportar o componente TodoList utilizando o decorator [ connect ] 
// integrar o redux utilizando o connect 
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)