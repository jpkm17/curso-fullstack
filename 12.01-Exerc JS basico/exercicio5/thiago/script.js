
let inputTabuada = prompt('Digite qual tabuada você quer saber:')

let tabuada = parseInt(inputTabuada)

for (let contador = 1; contador <= 10; contador++) {
  let resultado = tabuada * contador
  
  let mensagem = `${tabuada} x ${contador} = ${resultado} <br>`
  
  document.write(mensagem)  
}