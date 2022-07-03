/*

JSON

JAVASCRIPT OBJECT NOTATION

*/

const objeto = {
    nome: 'Fulano',
    idade: 23.
}

//obj para JSON
const json = JSON.stringify(objeto)

//JSON para objeto
const jsonParseado = JSON.parse(json)

console.log(jsonParseado.idade)