/*

CALLBACK
 
callback --> função que eu  passo para outra função, ex: setTimeout

*/

function exibirNaTela(dados) {
    console.log('exibirNaTela', dados)
}

const botaoCarregar = document.querySelector('#botaoCarregar')


// Não posso passar uma função dentro da outra função porque vai executa-lá 
//botaoCarregar.onclick = carregarFotos(function...)

/* a arrow function previne que o carregarFotos seja executado
ele executa a arrow func e espera o evento de click para ele executar a função */
botaoCarregar.onclick = () => carregarFotos(exibirNaTela)


//callback -> função
function carregarFotos(callback) {
    const xhttp = new XMLHttpRequest()

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status === 200) {
            const response = JSON.parse(this.responseText)

            if (callback) {
                callback(response)
            }
        }
    }

    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)
    xhttp.send()
}

