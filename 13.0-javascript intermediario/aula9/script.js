
let formulario = document.querySelector('#formCadastro')

//validação
formulario.onsubmit = function (evento) {
    evento.preventDefault()

    // console.log(document.forms['formCadastro']['nome'].value)

    //[id dor form][name do campo]
    let inputNome = document.forms['formCadastro']['nome']

    if (!inputNome.value) {
        inputNome.classList.add('inputError')

        let span = inputNome.nextSibling.nextSibling
        span.innerText = 'Digite o nome corretamente'

    } else {
        inputNome.classList.remove('inputError')
        let span = inputNome.nextSibling.nextSibling
        span.innerText = ''
    }
}