import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import Field from './field'

/*
field é um parâmetro e será atribuído a ele uma [função reducers],
logo o resultado do field será uma função (pode ser uma função
Arrow () => (...) ). 

value é um atributo da função arrow que será retornada

NOTA:
Reducers são funções puras. Recebem o estado original, recebe a ação
que aconteceu. Em cima dessas duas informações ele vai gerar uma versão
atualizada do estado

*/
const reducers = combineReducers({
    field: () => ( { value: 'opa' } )
})
 
ReactDOM.render(
    <Provider store = { createStore(reducers) } >
        <Field inicialValue='Teste' />
    </Provider>
    , document.getElementById('app')
)
