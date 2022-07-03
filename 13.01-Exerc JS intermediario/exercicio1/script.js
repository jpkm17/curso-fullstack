
let contador = 0
let botaoSoma = document.querySelector('#somar')
let botaoSubtrair = document.querySelector('#subtrair')

botaoSoma.onclick = somar
botaoSubtrair.onclick = subtrair 

function somar(){
    contador++
    let p  = document.querySelector('#paragrafo')
    p.innerText = contador
}

function subtrair(){
    contador--
    let p = document.querySelector('#paragrafo')
    p.innerText = contador
}