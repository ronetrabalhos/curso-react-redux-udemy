import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

// Import dos componentes criados destinados a aplicação
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'


// Determinação das Rotas
export default props => (
    <Router history={hashHistory} >
        <Route path='/' component={Dashboard} />
        <Route path='/billingCycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
    </Router>
)