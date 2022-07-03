/*

ARROW FUNCTIONS

ES6

As funçoes de seta nos permitem escrever uma sintaxe de 
função mais curta.

*/

const teste = (param1, param2) => {
    return param1, param2
}



//retorno implicito, ela literalmente da um return
const soma = (param1, param2) => param1 + param2

const resultado = soma(11, 2)

console.log(resultado)

//quanto tem 1 parametro pode remover o parenteses
const teste2 = param1 => param1

console.log(teste('ok'))





const botao = document.querySelector('#botao')

botao.onclick = () => {
    console.log(this)
}