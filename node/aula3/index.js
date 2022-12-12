// require: responsavel por importar o arquivo
//  const calculos = require('./calculos.js')

const {soma, multiplicacao} = require('./calculos.js') 

// const resultado = calculos.soma(10, 20)
// const resultado = calculos.multiplicacao(10,20)

const resultado = multiplicacao(10,20)
console.log(resultado)