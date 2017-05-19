const INITIAL_STATE = { description: '', list : [] }

/*
Função que representa o reducer

O reducer recebe o STATE atual e uma action
Sempre que uma action for executada, os reducers da aplicação são
chamados e você vai dizer se quer mudar o STATE dentro deste reducer (que é uma função pura),
que não gera um efeito colateral, ou manter o STATE como ele está.

*/ 
export default (state = INITIAL_STATE, action ) => {

    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}