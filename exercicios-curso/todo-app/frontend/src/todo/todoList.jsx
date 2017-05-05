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
                <td> 
                    { todo.description } 
                </td>
                <td>
                    <IconButton 
                        style = 'danger' 
                        icon = 'trash-o'
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