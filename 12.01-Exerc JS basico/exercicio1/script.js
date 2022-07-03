/*
​1 - Faça uma página que ao entrar vai pedir o nome do usuário e depois a idade, em seguida mostre na tela uma mensagem 
de saudação de acordo com a idade do usuário:  

"Olá [nome], você é MAIOR de idade" ou "Olá [nome], você é MENOR de idade" 

*/

let nome = prompt('Digite seu nome: ')
let idade = prompt('Digite sua idade: ')

let maiorMenor

if(idade >=18){
    maiorMenor = 'maior'
} else {
    maiorMenor = 'menor'
}

let mensagem = `Olá ${nome}, você é ${maiorMenor} de idade!`

document.write(mensagem)