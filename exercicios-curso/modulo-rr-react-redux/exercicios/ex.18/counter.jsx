import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// import das actions
import { inc, dec, stepChanged } from './counterActions'

const Counter = props => (
    
    // template do componente
    <div>
        <h1> { props.counter.number } </h1>  
        <input  onChange = { props.stepChanged }
                value = { props.counter.step }
                type = 'number' 
        />
        <button onClick = { props.dec } > DECrementar </button>
        <button onClick = { props.inc } > INCrementar </button> 
    </div>
)


// Criação dos métodos de mapeamento (mapsTo...)

const mapStateToProps = state => ({
    counter: state.counter
})

const mapDispatchToProps = dispatch => bindActionCreators ( {
    inc,
    dec,
    stepChanged
}, dispatch )

// Implementando o método decorator
// connect (mapStateToProps, mapDispatchToProps): é uma função que retorna uma função
// e a função retornada passa (Counter) como parâmetro, que é o componente atual 
export default connect (mapStateToProps, mapDispatchToProps) (Counter)
