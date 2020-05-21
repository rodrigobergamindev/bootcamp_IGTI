'use strict'; //Javascript acusa mais erros

//var x let

//var tem escopo abrangente (global)
//let tem escopo reduzido (escopo de bloco ou função) 
//ACESSE O LINK ---> http://www.constletvar.com/const-vs-let-vs-var.png

function withVar () {
    {
    var x = 'eu sou uma variável do tipo var'
}


x = x + '.'
console.log(x)
}


withVar()

function withLet() {
    {
        let x = 'e eu sou do tipo let'
    }
    x = x + '.'
}

withLet()

//o tipo const aponta somente para uma referência, é impossível reatribuir outra referência para const
//Exemplo:

const d = []
d.push(1) // isso funciona pois o const não garante a imutabilidade do objeto que está sendo referenciado, objetos que não são tipos primitivos

const y = 1
y = 2 //irá gerar erro, pois é um tipo primitivo