/*
​2 - Modifique o exercício anterior para exibir uma mensagem personalizada caso o nome da pessoa seja "Thomas Anderson", exibir: 
"Olá [nome], você é MAIOR de idade. Você é personagem do filme The Matrix!". 
Mantenha a mensagem condizente com a idade informada.
*/

let nome = prompt('Digite seu nome: ')
let idade = prompt('Digite sua idade: ')

let maiorMenor

if(idade >=18){
    maiorMenor = 'maior'
} else {
    maiorMenor = 'menor'
}

let mensagem = ''

if(nome === 'Thomas Anderson' || nome === 'thomas anderson'){
    mensagem = `Olá ${nome}, você é ${maiorMenor} de idade. Você é personagem do filme The Matrix!`
} else{
    mensagem  = `Olá ${nome}, você é ${maiorMenor} de idade`
}

document.write(mensagem)