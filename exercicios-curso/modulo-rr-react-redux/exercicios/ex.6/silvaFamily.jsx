import React from 'react'
import Member from './member'

// Neste exemplo temos um objeto fechado
// Os elementos já estão declarados
// Abaixo instanciamos o componente member

export default () => (
    <div>
        <Member name = 'João' lastName = 'Silva'/>
        <Member name = 'Maria' lastName = 'Silva'/>
        <Member name = 'José' lastName = 'Silva'/>
        <Member name = 'Pedro' lastName = 'Silva'/>
    </div>
)