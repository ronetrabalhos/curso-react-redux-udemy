import React from 'react'
import { childrenWithProps, printc } from '../../utils/reactUtils'

// teremos através deste componente o mesmo o mesmo resultado 
// obtido com family.jsx, porém estamos utilizando um arquivo
// onde agrupamos todos os scripts úteis 

// o import foi feito com { } pois não declaramos o método como
// default, visto que teremos inúmeras funções.


export default props => (

    <div>
        <h1> Família </h1>      
        { childrenWithProps(props.children, props) }
    </div>

)

printc('[ childrenWithProps ] - Passou pela função');