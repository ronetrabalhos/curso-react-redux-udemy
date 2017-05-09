import React from 'react'

// children: propriedade especial da tag. Quando definirmos
// o componente family, tudo que passarmos dentro dele, será
// passado para o props.children

// Na aula anterior tinhamos
// {React.cloneElement(props.children, {...props})}
// A instrução acima funciona apenas para um membro, se colocarmos
// vários, teremos erro.

// Para resolver esse impasse utilizamos o método map, que percorrer
// um conjunto de elementos e os transforma em outro.
// A saída é do tipo da entrada.
// Callback: child => React.cloneElement(child, {...props}))}

// Para entender mais sobre o map, pesquise por:
// javascript array map


export default props => (

    <div>
        <h1> Família </h1>
       
        { React.Children.map(props.children,
        child => React.cloneElement(child, {...props}))}
    </div>
)