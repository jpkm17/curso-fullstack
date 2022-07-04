/*
string
number
boolean
array
object
undefined
null
*/

//string
let nome = 'João'
console.log(nome)

//string concatenada
let sobrenome = 'Pedro'
console.log(nome + ' ' + sobrenome)

//string literal
console.log(`${nome} ${sobrenome}`)

//number
let idade =  16
console.log(idade)
console.log(idade + 10)

//number float
let porcentagem = 10.2
console.log(porcentagem + '%')

//boolean (true ou false)
let  maiorDeIdade = true
console.log(maiorDeIdade)

let menorDeIdade = false
console.log(menorDeIdade)

//array
let habilidades = ['Javascript', 'php', 'python',]
console.log(habilidades)
console.log(habilidades.length)
console.log(habilidades[2])

//object --> parecido com array, porem eu tenho mais flexibilidade
let pessoa = {
    nome: 'Fulano',
    sobrenome: 'da Silva',
    idade: 25,
    habilidades: ['c++', 'c#', 'python']
}
console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.habilidades)
// JSON(JAVASCRIPT OBJECT NOTATION)


//undefined
let endereço 
console.log(endereço)

//null
let cidade = null
console.log(cidade)
