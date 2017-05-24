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
    const request = axios.get(`${URL}?sort=-createAt`)
    return {
        type    : 'TODO_SEARCHED',
        payload : request
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