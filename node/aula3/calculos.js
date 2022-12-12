
function soma(n1, n2){
    return n1 + n2
}

function multiplicacao(n1, n2){
    return n1 * n2
}

/* 
  module.exports = soma
este arquivo é um modulo, e vai exportar a função soma()
*/ 

module.exports = {
    soma,
    multiplicacao
}