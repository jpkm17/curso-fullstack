
let opcoes

for (let contador = 2021; contador >= 1900; contador--) {
    opcoes += `<option>${contador}</option>`
}

document.querySelector('#ano').innerHTML = opcoes


let lista = ''
let clientes = ['João', 'Rogerinho', 'Moacir', 'Fulano', 'Ciclano']

for (let contador = 0; contador < clientes.length; contador++){
    lista += `<li>${clientes[contador]} - ${contador}</li>`
}

document.querySelector('#listaClientes').innerHTML = lista