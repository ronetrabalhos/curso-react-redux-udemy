import React, {Component} from 'react'

// Componentes 
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

// Axios
import axios from 'axios'
const BASE_URL = 'http://localhost:3002/api'


export default class Dashboard02 extends Component {

    // Para trabalhar com o State do componente é que foi acrescentado
    // esta parte do código. Iniciamos com o INITIAL_STATE
    constructor(props) {
        // requerido
        super(props)
        // Estado inicial do State
        this.state = { credit: 0, debt: 0 }
    }


    // Adicionamos a chamada ao payload:request
    // Chamamos o them, pois ele é a resposta da promise
    componentWillMount(){
        axios.get(`${BASE_URL}/billingCycles/summary`)
             .then(resp => this.setState(resp.data))
    }

    render() {

        const { credit, debt } = this.state


        return (
            <div>
                <ContentHeader title='Dashboard 02' small='Versão 1.0' />
                
                <Content>

                    <Row>
                        {/* Componente ValueBox com o resumo financeiro */}
                        <ValueBox 
                            cols='12 4'
                            color='green' 
                            icon='bank' 
                            value={`R$ ${credit}`} 
                            text='Total de Créditos'>
                        </ValueBox>

                        <ValueBox 
                            cols='12 4'
                            color='red' 
                            icon='credit-card' 
                            value={`R$ ${debt}`}  
                            text='Total de Débitos'>
                        </ValueBox>

                        <ValueBox 
                            cols='12 4'
                            color='blue' 
                            icon='money' 
                            value={`R$ ${credit - debt}`} 
                            text='Total Consolidado'>
                        </ValueBox>
                    </Row>
                </Content>
            </div>
        )
    }
}

