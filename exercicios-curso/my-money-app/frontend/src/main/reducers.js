import { combineReducers } from 'redux'

// Resultado da combinação de todos os reducers da aplicação
const rootReducer = combineReducers({

    dashboard: () => ({
        summary: {credit: 100, debt: 50}
    })

})

export default rootReducer 