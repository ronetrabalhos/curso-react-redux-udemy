import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'

// rootReducer é o reducer que vai combinar todos os outros
const rootReducer = combineReducers ({

    todo : todoReducer
})

export default rootReducer