const clientes = [
    {name: 'Fulano', lastname: 'Da Silva'},
    {name: 'Ciclano', lastname: 'Santos'},
    {name: 'Beltrano', lastname: 'Moreira'},
]

// ['Fulano Da Silva', 'Ciclano Santos' ]

let clientesFinal = []

clientes.forEach(function(cliente){
    //push insere um item dentro de uma array
    clientesFinal.push(cliente.name + '' + cliente.lastname)
})
console.log(clientesFinal)



//usando o map
//ele serve para montar e percorrer arrays
const clientesFinalMap = clientes.map(cliente => cliente.name + '' + cliente.lastname)


console.log(clientesFinalMap)