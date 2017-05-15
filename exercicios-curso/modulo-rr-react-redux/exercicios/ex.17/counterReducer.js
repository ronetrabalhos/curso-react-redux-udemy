// Constante que representa o estado inicial
// Não é necessário

// step: 1      = inc e dec de 1 unidade
// number: 0    = valor inicial igual a 0
const INITIAL_STATE = { step: 1, number: 0}

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case 'INC':
            return  { ...state, number: state.number + state.step }
        case 'DEC':
            return { ...state, number: state.number - state.step }
        case 'STEP_CHANGED':
            return { ...state, step: action.payload }
        default:
            return state
    }
}

