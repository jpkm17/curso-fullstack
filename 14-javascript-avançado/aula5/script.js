const clientes = [
    { name: 'Fulano', lastname: 'Da Silva', age: 14 },
    { name: 'Ciclano', lastname: 'Santos', age: 18 },
    { name: 'Beltrano', lastname: 'Moreira', age: 20 },
]

const testeClientesMaiores = clientes.filter(cliente => {
    /* o filter depende que o return seja true ou false
        let retorno = false

        if(cliente.age >= 18) {
            retorno = true
        }
        return retorno */
})


//exemplo IF ternario (não precisaria ter o true ou false, porque ele ja faz essa verificação)
const clientesMaiores = clientes.filter(cliente => cliente.age >= 18 ? true : false)

console.log(clientesMaiores)