import React from 'react'

// função elemento filho com propriedade
// retorna os elementos filhos adicionados as propriedades

function childrenWithProps(children, props){

    //console.log("reactUtils");

    return React.Children.map(props.children, 
        child => React.cloneElement(child, {...props}))
}






// Função para imprimir no console
function printc(mensagem){
    return console.log(mensagem);
}


// ======================================================
// EXPORTANDO A FUNÇÃO
// ======================================================
export { childrenWithProps }
export { printc }
