import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family>
        <Member name = 'Gustavo' lastName = 'Silva' />
        <Member name = 'Paulo' lastName = 'Silva' />
    </Family>
    , document.getElementById('app')
)

