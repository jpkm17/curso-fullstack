let clientes = [
    {
        nome: 'João',
        idade: 16,
        linguagens:['javascript', 'php', 'python'] 
    },
    {
        nome: 'Fulano',
        idade: 40,
        linguagens:['c', 'c++', 'c#'] 
    },
    {
        nome: 'Ciclano',
        idade: 25,
        linguagens:['go', 'closure', 'r'] 
    },
]
    // for(let count = 0; count < clientes.length; count++){
    //     console.log(clientes[count].nome)
    // }
    
    
    let htmlClientes = ''
for(let cliente of clientes){

    let listaLinguagens = ''
    
    for(linguagem of cliente.linguagens){
        listaLinguagens += `<li>${linguagem}</li>`
    }


    htmlClientes += `
        <li>
            <b>nome:</b> ${cliente.nome} <br>
            <b>idade:</b> ${cliente.idade} <br>
            <b>linguagens</b>
            <ul>
                ${listaLinguagens}
            </ul>
        </li>
    `
}

document.querySelector('#listaClientes').innerHTML = htmlClientes