
//Um pouco de DOM e funções
console.log('Hello World!')

const mudarFundo = e => {
    const element = e.target
    element.style.backgroundColor = "DodgerBlue";
    element.style.color = "#f1f1f1";

    //esta não é uma boa prática
    //ideal seria usar o método classList para adicionar classes CSS aos meus elementos HTML
    // e não alterá-los diretamente com js
}

document.querySelectorAll('.info').forEach(element => {
    element.onmouseover = mudarFundo
})


//Operadores ternários

const a = 8
const b = 5

const resultado = a > b ? 'maior': a < b ? 'menor' : 'igual';
console.log(resultado)