import React from 'react'

// children: propriedade especial da tag. Quando definirmos
// o componente family, tudo que passarmos dentro dele, será
// passado para o props.children

export default props => (

    <div>
        <h1> Família </h1>
        {props.children}
    </div>
)