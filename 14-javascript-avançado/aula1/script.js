/*

GLOBAL LOCAL
LOCAL

- O ESCOPO DETERMINA A VISIBILIDADE DE UMA VARIAVEL 

- AS FUNÇÕES NO JS CRIAM O SEU PRÓPRIO ESCOPO
 - AS VARIAVEIS DE UMA FUNÇÃO NÃO SÃO ACESSEIVEIS FORA DELA

*/


//escopo global
// let a = 123

if(1 == 1){
    //escopo local
    let a = 123
}

function teste() {
    //escopo local
    //let a = 123

    //escopo global
    a = 123
}

teste()
console.log(a)