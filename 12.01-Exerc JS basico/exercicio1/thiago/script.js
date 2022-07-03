

let inputNome = prompt('Digite o seu Nome:')

let inputIdade = prompt('Digite o sua Idade:')

let idade = parseInt(inputIdade)

let maiorOuMenor

if (idade >= 18) {
  maiorOuMenor = 'maior'
} else if (idade < 18) {
  maiorOuMenor = 'menor'
}

let mensagem = `Olá ${inputNome}, você é ${maiorOuMenor} de idade!`

document.write(mensagem)