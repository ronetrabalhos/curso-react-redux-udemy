// Este arquivo é um componente react
import '../common/template/dependencies'
import React from 'react'

// Componentes que compõem o template
import Header  from '../common/template/header'
import Sidebar from '../common/template/sideBar'
import Footer  from '../common/template/footer'
import Routes  from './routes'


// Tudo o que for exportado a partir de props será o template
// que será criado a partir deste componente
// Toda estrutura do template estará neste arquivo
export default props => (
    <div className='wrapper'>
        <Header /> 
        <Sidebar />
        <div className='content-wrapper'>
            <Routes/>
        </div>
        <Footer />
    </div>
)