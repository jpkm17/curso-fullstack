
let contador = 0
let botaoSoma = document.querySelector('#somar')
let botaoSubtrair = document.querySelector('#subtrair')
let incremento

botaoSoma.onclick = somar
botaoSubtrair.onclick = subtrair

let div = document.querySelector('#div')

function somar() {
    botaoSoma.classList.add('botaoSoma')
    botaoSubtrair.classList.remove('botaoSub')
    clearInterval(incremento)

    incremento = setInterval(function () {
        contador++
        div.innerText = contador
    }, 100)
}


function subtrair() {
    botaoSubtrair.classList.add('botaoSub')
    botaoSoma.classList.remove('botaoSoma')
    clearInterval(incremento)

    incremento = setInterval(function () {
        contador--
        div.innerText = contador
    }, 100)
}
