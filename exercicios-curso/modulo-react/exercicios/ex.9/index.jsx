import React from 'react'
import ReactDOM from 'react-dom'
//import Family from './family'
import Family from './family.childrenWithProps'
import Member from './member'

ReactDOM.render(
    <Family lastName = 'da Silva'> 

        <Member name = 'Gustavo' />
        <Member name = 'Caixxxinhos' />
        <Member name = 'Flávia' />
        <Member name = 'Ana' />
        <Member name = 'Paula' />

    </Family>
    , document.getElementById('app')
)

console.log('---');

/*
ReactDOM.render(
    <Family lastName = 'dos Santos'> 

        <Member name = 'Neymar' />
        <Member name = 'Bruna' />

    </Family>
    , document.getElementById('app')
)
*/
