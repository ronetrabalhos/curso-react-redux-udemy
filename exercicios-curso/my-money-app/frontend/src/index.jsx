// Este arquivo é um componente react
// ReactDOM interagir com a página
// imports referente ao react e ao redux
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// import de componentes da aplicação
import App from './main/app'
import reducers from './main/reducers'


// Criação da Store
const store = createStore(reducers)

// O nome do getElementById foi definido no arquivo app.jsx
ReactDOM.render(
    <App />, 
    document.getElementById('app')
)
