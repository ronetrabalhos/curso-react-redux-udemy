// Abaixo temos 3 funções que são actions creator

// cria um objeto que tem o tipo de INCremento
export function inc() {
    return { type: 'INC'}
}

// cria um objeto que tem o tipo de DECremento
export function dec() {
    return { type: 'DEC'}
}

// cria um objeto que tem o tipo de atualização de mudança (STEP_CHANGED)
// e um payload com o valor do evento
// O STEP é jusntamente o INC e DEC
export function stepChanged(e){
    return {
        type: 'STEP_CHANGED',
        payload: e.target.value
    }
}