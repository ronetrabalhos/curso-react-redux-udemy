import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

// actionCreator para a descrição do campo de busca
// retorna um objeto, com um tipo type, que representa uma action
export const changeDescription = (event) => ({
    type    : 'DESCRIPTION_CHANGED',
    payload : event.target.value
})

// actionCreator para buscar os serviços do backend
// retorna um objeto, com um tipo type, que representa uma action
export const search = () => {

    // utilizando redux-thunk para resolver o problema de marcar tarefa
    // como concluída ou não e manter o filtro do item pesquisado
    // além do dispatch vamos utilizar o método getState

    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${ description }/` : ''
        const request = axios.get(`${URL}?sort=-createAt${search}`)
              .then(resp => dispatch( { type: 'TODO_SEARCHED', payload: resp.data } ))
    }
}

// ====================================================================
// ACTION ADD
// O comentado utiliza redux-multi, mas tem problema de concorrência
// O segundo utiliza redux-thunk, resolve o problema do primeiro
// ====================================================================

// actionCreator para inserir novo registro na lista
// retorna uma action
// por causa do multi, retornamos um array com duas actions
// export const add = (description) => {
//     const request = axios.post( URL, { description } )
//     return [
//        { type : 'TODO_ADDED', payload : request }, // dispara evento de adicionar
//        search()   // dispara a atualização da lista
//    ]
// }

/*
 Não retorna uma action, mas um método e esse método recebe como parâmetro o dispatch
Dispatch é o cara que realmente vai enviar sua action para todos os reducers
Observe que agora temos o .then, que é o objeto da promise
Quando o método then for chamado ele vai receber uma callback que terá como parâmetro uma resposta
que dispara um dispach, passando a action que eu quero que seja disparada
Observe que temos dois .then, isso garante que serão disparados somente quando o .then anterior 
estiver pronto
*/
export const add = (description) => {

    return dispatch => {
        axios.post( URL, { description} )
             .then( resp => dispatch( { type: 'TODO_ADDED', payload: resp.data }) )
             .then( resp => dispatch( search() ))
    }

}


// ====================================================================
// ACTION PARA:
// MARCAR / DESMARCAR TAREFA COMO CONCLUÍDA
// REMOVER TAREFA DA LISTA
// LIMPAR O FORMULÁRIO 
// ====================================================================
/*
   As linhas:
   .then(resp => dispatch( { type: 'TODO_MARKED_AS_DONE', payload: resp.data }))
   .then( resp => dispatch( { type: 'TODO_MARKED_AS_PENDING', payload: resp.data } ))
   .then( resp => dispatch( { type: 'TODO_REMOVE', payload: resp.data } ))
   
   foram adicioandas apenas para mostrar que caso fosse necessário disparar mais de uma
   action, seria esse o formato que assumiria a instrução.
   É possível observar que elas não foram utilizadas, pois não há referências a elas em
   todoReducer.js
   Para o exercício, ela foi interessante, pois é possível ver pelo console redux a ordem
   do disparo das actions
*/


export const markAsDone = (todo) => {
    return dispatch => {
        axios.put( `${URL}/${todo._id}` , { ...todo, done: true } )
             //.then(resp => dispatch( { type: 'TODO_MARKED_AS_DONE', payload: resp.data }))
             .then(resp => dispatch( clear() ) )
             .then(resp => dispatch( search() ) )
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
             //.then( resp => dispatch( { type: 'TODO_MARKED_AS_PENDING', payload: resp.data } ))
             .then( resp => dispatch(search() ) )
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
             //.then( resp => dispatch( { type: 'TODO_REMOVE', payload: resp.data } ))
             .then( resp => dispatch( search() ))
    }
}

export const clear = () => {
    return [{ type: 'TODO_CLEAR'}, search()]
}