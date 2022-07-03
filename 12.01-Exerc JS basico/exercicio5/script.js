/*
​5 - Crie uma página que vai pedir ao usuário "Digite qual tabuada você quer saber:",
o usuário vai digitar um número e a partir desse número você vai exibir a tabuada correspondente. 
Utilize um laço de repetição para montar a tabuada.
*/

let inputTabuada = prompt('Digite qual tabuada você quer saber: ')

let tabuada = parseInt(inputTabuada) 

for(let numero = 1; numero <= 10; numero ++){

    resultado = tabuada * numero
    document.write(`${tabuada} x ${numero} = ${resultado} <br>`)

}