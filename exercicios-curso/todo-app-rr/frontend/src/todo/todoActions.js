import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

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

