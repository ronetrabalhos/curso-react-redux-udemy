import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Todo from '../todo/todo'
import About from '../about/about'

// Componente baseado em função arrow
// O uso do parênteses (  ) é pq será retornado uma expressão
// Em uma função arrow o return está implicito, exceto se
// for utilizado as chaves {  }

export default props => (
    
    <div className='container'>
        <Todo />
        <About />
    </div>
)