// Este arquivo é um componente react
// ReactDOM interagir com a página
// imports referente ao react e ao redux
import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

// importe de middleware
import promise from 'redux-promise'

// import de componentes da aplicação
import App from './main/app'
import reducers from './main/reducers'


// Criação da Store
const store = applyMiddleware(promise) (createStore) (reducers)

// O nome do getElementById foi definido no arquivo app.jsx
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app')
)
