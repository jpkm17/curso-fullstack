/*

DESTRUCTURING ASSIGNMENT (desestruturação de atribuição)

*/

const obj = {
    nome: 'fulano',
    idadE: 35,
}

const {
    //declarei uma variavel nomeDoUsuario para a variavel 'nome'
    nome: nomeDoUsuario,
    //a variavel tem que ter o mesmo nome da propriedade do obj
    idadE,
} = obj

//console.log(nomeDoUsuario)
//console.log(idadE)



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
    const dados = await fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(transformarEmJson)
        .catch(exibirErro)

    const {name, email, phone} = dados

    console.log(name, email, phone)
}