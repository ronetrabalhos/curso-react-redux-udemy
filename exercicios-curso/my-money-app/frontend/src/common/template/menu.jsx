import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#' label='Dashboard' icon='tachometer' />
        
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem 
                path='#billingCycles' 
                label='Ciclos de Pagamentos' 
                icon='usd' />
        </MenuTree>
        
        <MenuTree label='Testes' icon='hand-spock-o'>
            <MenuItem 
                path='#d2' 
                label='Dashboard (apenas React)' 
                icon='thumbs-o-up' />
        </MenuTree>

    </ul>
)