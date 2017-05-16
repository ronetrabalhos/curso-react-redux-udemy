import { combineReducers } from 'redux'

// rootReducer é o reducer que vai combinar todos os outros
const rootReducer = combineReducers ({

    todo : () => ({

        description: 'Ler livro',
        list : [{
            _id: 1,
            description: 'Pagar fatura do cartão',
            done: true
        }, {
            _id: 2,
            description: 'Reunião com a equipe as 10h',
            done: false
        }, { 
            _id: 3,
            description: 'Consulta médica na terça-feira, depois do almoço',
            done: false
        }]
    })
})

export default rootReducer