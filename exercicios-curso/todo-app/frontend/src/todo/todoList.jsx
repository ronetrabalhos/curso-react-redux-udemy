import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

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
                        onClick = {() => props.handleMarkAsDone(todo)}>
                    </IconButton>

                    <IconButton 
                        style = 'warning' 
                        icon = 'undo'
                        hide = { !todo.done }
                        onClick = {() => props.handleMarkAsPending(todo)}>
                    </IconButton>

                    <IconButton 
                        style = 'danger' 
                        icon = 'trash-o'
                        hide = { !todo.done }
                        onClick = {() => props.handleRemove(todo)}>
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
                </tr>
            </thead>

            <tbody> 
                { renderRows() }
            </tbody>
        </table>

    )
}