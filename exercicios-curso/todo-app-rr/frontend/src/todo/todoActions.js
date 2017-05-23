import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

// actionCreator para a descrição do campo de busca
export const changeDescription = (event) => ({
    type    : 'DESCRIPTION_CHANGED',
    payload : event.target.value
})

// actionCreator para buscar os serviços do backend
export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAT`)
    return {
        type    : 'TODO_SEARCHED',
        payload : request
    }
}

// actionCreator para inserir novo registro na lista
export const add = (description) => {
    const request = axios.post( URL, { description } )
    return {
        type    : 'TODO_ADDED',
        payload : request
    }
}

