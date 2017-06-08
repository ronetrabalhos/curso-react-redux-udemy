import { combineReducers } from 'redux'

// Reducers
import DashboardReducer from '../dashboard/dashboard.reducer'

// Resultado da combinação de todos os reducers da aplicação
const rootReducer = combineReducers({

    dashboard: DashboardReducer

})

export default rootReducer 