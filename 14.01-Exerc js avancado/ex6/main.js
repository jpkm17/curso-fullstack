const formulario = document.querySelector('#formulario')
const inputMsg = document.querySelector('#digitarMsg')
const div = document.querySelector("#mensagem")
const botao = document.querySelector('#botao')
const gif = document.querySelector('#gif')

function promise(msg) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(msg)
        }, 1000)

    })
}

formulario.onsubmit = (e) => {
    e.preventDefault()

    let mensagem = inputMsg.value

    botao.classList.add('hidden')
    gif.classList.remove('hidden')

    promise(mensagem).then(msg => {
        formulario.classList.add('hidden')
        div.innerHTML = `<h1>${msg}</h1>`
    })
}