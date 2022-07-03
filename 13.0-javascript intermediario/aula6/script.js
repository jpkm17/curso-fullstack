let quadrado = document.querySelector('.quadrado')

// function minhaFuncao(){
//     console.log('mensagem 1')
// }

function minhaFuncao(evento){
    // console.log(evento.target.innerWidth)
    console.log(evento.key)
}

// quadrado.onclick = minhaFuncao

// quadrado.onmousemove = minhaFuncao

// quadrado.onmouseenter = minhaFuncao

// quadrado.onmouseout = minhaFuncao

// window.addEventListener('resize', minhaFuncao)

window.addEventListener('keypress',minhaFuncao)

//para descobrir mais eventos pesquisar por js events