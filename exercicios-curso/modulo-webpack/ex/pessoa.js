/* 
Um recurso novo no EcmaScript 2015 são as classes, que na verdade são apenas
funções escritas de uma maneira diferente
*/ 

export default class Pessoa{

    constructor(nome){
        this.nome = nome
    }

    //função
    toString(){
        return `Pessoa: ${this.nome}`;
    }
}
