import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Grid  from '../template/grid'
import IconButton  from '../template/iconButton'
import { add, changeDescription, search, clear } from './todoActions'


// Mudando de componente funcional para Classe
class TodoForm extends Component {

    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }



    // Mudamos de componente funcional para classe
    // para utilizarmos o componentWillMount()
    // pois ele é quem chamará o componente search()
    componentWillMount() {
        this.props.search()
    }



    // Método KeyHandler
    keyHandler(e) {

        // Extrair do atributo props os métodos add, search e description
        // Essa é uma nomeclatura do AE 2015 
        const { add, search, description, clear } = this.props

        if( e.key === 'Enter' ){
            e.shiftKey ? search() : add(description)
        }
        else if ( e.key === 'Escape' ){
            clear()
        }
    }

    render(){ 
        
        const { add, search, description } = this.props

        return (
            <div role='form' className='todoForm'>  

                <Grid cols='12 9 10'> 
                        <input id='description' 
                            className = 'form-control'
                            placeholder = 'Adicione uma tarefa'
                            onChange = { this.props.changeDescription }
                            onKeyUp = { this.keyHandler }
                            value = { this.props.description } >
                        </input>
                </Grid>


                <Grid cols='12 3 2'> 
                    <IconButton 
                            style='primary' 
                            icon='plus' 
                            onClick = { () => add(description) } > 
                        </IconButton>         

                    <IconButton 
                            style='info' 
                            icon='search' 
                            onClick = { () => search() } > 
                        </IconButton>  

                    <IconButton 
                            style='default' 
                            icon='close' 
                            onClick = { this.props.clear } > 
                        </IconButton>  

                </Grid>
            </div>
        )
    }

} // fim classe



// mapeamento e exportação com redux
const mapStateToProps = state => ({ description : state.todo.description })
const mapDispatchToProps = dispach => bindActionCreators(
    { add, changeDescription, search, clear }, 
    dispach 
)

// exportando o componente
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
