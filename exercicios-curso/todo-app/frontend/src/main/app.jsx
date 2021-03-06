import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

// Componente baseado em função arrow
// O uso do parênteses (  ) é pq será retornado uma expressão
// Em uma função arrow o return está implicito, exceto se
// for utilizado as chaves {  }

export default props => (
    
    <div className='container'>
        <Menu />
        <Routes />
    </div>
)