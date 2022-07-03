/*
​3 - Modifique o exercício anterior para pedir os dados do usuário somente depois dele clicar 
em um botão escrito "Entrar". Faça a mensagem de saudação ser exibida em um H1, e a mensagem
personalizada em um H2.
*/

function entrarDados(){
let nome = prompt('Digite seu nome: ')
let idade = prompt('Digite sua idade: ')

let maiorMenor

if(idade >=18){
    maiorMenor = 'maior'
} else {
    maiorMenor = 'menor'
}

let mensagem = ''
let mensagemPersonalizada = ''

if(nome === 'Thomas Anderson' || nome === 'thomas anderson'){
    
    mensagem = `Olá ${nome}, você é ${maiorMenor} de idade.` 
    mensagemPersonalizada = 'Você é personagem do filme The Matrix!'

} else{
    mensagem  = `Olá ${nome}, você é ${maiorMenor} de idade`
}
document.querySelector('#saudacao').innerHTML = mensagem
document.querySelector('#mensagemPersonalizada').innerHTML = mensagemPersonalizada

}