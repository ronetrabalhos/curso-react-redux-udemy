import React from 'react'
import ReactDOM from 'react-dom'
//import Componente from './component'
import { Primeiro, Segundo } from './component-aula23'

// Observe que utilizamos os componentes dentro de 
// uma div. Isso é necessário, pois o react só entende
// os elementos agrupados
// Isso pode ser no index.jsx ou no próprio componente .jsx


ReactDOM.render(
    <div>
        <Primeiro />
        <Segundo />
    </div>
    , document.getElementById('app')
)

