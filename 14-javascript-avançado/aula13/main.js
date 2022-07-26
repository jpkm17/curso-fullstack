/*

FETCH

*/

function transformarEmJson(response) {
    //isso aqui é uma promise
    return response.json()
    //não precisaria colocar o then pq la em baixo ja tem um then que encadeou
}

function exibirNaTela(dados) {
    console.log(dados)
}

function exibirErro() {
    console.log('Ops, deu erro')
}

const botaoCarregar = document.querySelector('#botaoCarregar')

const configs = {
    method: 'POST',
    headers: {},
}

botaoCarregar.onclick = () =>
    //1º param URL, 2º param OBJ(por padrao o metodo é o get)
    fetch('https://jsonplaceholder.typicode.com/photos', configs)
        .then(transformarEmJson)
        .then(exibirNaTela)
        .catch(exibirErro)