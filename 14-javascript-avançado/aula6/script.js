const clientes = [
    { name: 'João', score: 43 },
    { name: 'Jaqueline', score: 38 },
    { name: 'Sarah', score: 80 },
    { name: 'Clara', score: 50 },
    { name: 'Sophia', score: 98 }
]

//o reduce permite manipular e retornar o que a gente quiser seja: OBJ, STRING, etc

//acc= accumulator
//curr = current
const clientesFinal = clientes.reduce((acc, curr) => {

    if (curr.score >= 50) {
        acc.pass.push(curr)
    } else {
        acc.fail.push(curr)
    }

    return acc
}, {
    pass: [],
    fail: []
})

console.log(clientesFinal)

// outro exemplo
const numeros = [1, 2, 3, 4]

const numerosFinal = numeros.reduce((acc, curr) => {
    
    acc += `${curr + 1}`
    
    return acc
}, '')
// ''--> é o acc