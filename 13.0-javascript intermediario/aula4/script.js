

let menuMobile = document.querySelector('.menuMobile')
let botaoMenu = document.querySelector('.botaoMenu')

let aberto = false //flag

function abrirOuFecharMenu(){

    if(aberto === true){
        menuMobile.classList.remove('aberto')
        aberto = false
        botaoMenu.innerText = 'Abrir menu'
    }
    else if(aberto == false){
        aberto = true
        menuMobile.classList.add('aberto')
        botaoMenu.innerText = 'Fechar menu'
    }
}