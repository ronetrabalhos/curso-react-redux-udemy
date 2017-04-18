import React from 'react'
import ReactDOM from 'react-dom'
import Componente from './component'

// <Componente /> : tag jsx; instância de um objeto

ReactDOM.render(<Componente texto='Texto da tag h1 passada por props' />, document.getElementById('app'))

