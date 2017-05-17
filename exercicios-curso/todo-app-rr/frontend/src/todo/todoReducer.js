const INITIAL_STATE = {

    description: '[ todoForm ] Ler livro ',
    
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

}


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
        default:
            return state
    }
}