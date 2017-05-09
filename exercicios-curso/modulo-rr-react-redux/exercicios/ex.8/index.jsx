import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName = 'Silva'> 
        <Member name = 'Gustavo' />
        <Member name = 'Caixinhos' />
        <Member name = 'Cabeção' />
    </Family>
    , document.getElementById('app')
)

