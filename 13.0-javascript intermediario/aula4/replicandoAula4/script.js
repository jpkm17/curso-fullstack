let botaoMenu = document.querySelector('.botaoMenu')
let menu = document.querySelector('.menu')

let exibirOuNão = false

function exibirMenu(){

    if(exibirOuNão === false){
        exibirOuNão = true
        menu.classList.add('exibir')
        botaoMenu.innerText = 'Fechar Menu'
        
    } else if(exibirOuNão === true){
        exibirOuNão = false
        menu.classList.remove('exibir')
        botaoMenu.innerText = 'Abrir Menu'
    }
}