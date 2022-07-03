/*
​4 - Modifique o exercício anterior para exibir um alerta escrito "Preencha os campos corretamente!" 
caso o usuário não preencha o nome ou idade. A página não deve exibir a mensagem de saudação neste caso ​H2.
*/

function entrarDados(){
    
    let nome = prompt('Digite seu nome: ')
    let idade = prompt('Digite sua idade: ')
    
    if(nome !== '' && idade !== ''){
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
    
    } else{
        alert('Preencha os campos corretamente!')
    }
}