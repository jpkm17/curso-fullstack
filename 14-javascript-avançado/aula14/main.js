/*

ASYNC / AWAIT

Async --> estrutura de codigo que permite transformar uma chamada asincrona em sincrona
*/

function transformarEmJson(response) {
    return response.json()
}

function exibirNaTela(dados) {
    console.log(dados)
}

function exibirErro() {
    console.log('Ops, deu erro')
}

const botaoCarregar = document.querySelector('#botaoCarregar')


botaoCarregar.onclick = aoClicarNoBotao

async function aoClicarNoBotao() {
    // tem que usar o await quando a função da frente for uma promise
    const dados = await fetch('https://jsonplaceholder.typicode.com/photos')
        .then(transformarEmJson)
        .catch(exibirErro)

    console.log(dados)
}
/* estou indicando que a função é assinc... 
e eu vou usar o await para esperar ele ser execudado */