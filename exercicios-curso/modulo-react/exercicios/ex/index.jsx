import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'

// Passando inteiro ao invés de string: coloca entre chaves
// Trabalhando com um componente um pouco mais robusto, 
// definimos na classComponent, uma função que receberá 
// dois valores: label e inicialValue
// Eles serão utilizamos na composição do componente.
// Vale recordar que qualquer valor recebido por props é
// somente leitura. Não pode ser manipulado.

// Para manipular implementamos o construtor e o inicializamos
// com o valor da variável inicialValue
 
ReactDOM.render(
    <ClassComponent label='Contador' initialValue={10} />
    , document.getElementById('app')
)
