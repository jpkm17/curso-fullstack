const aluno = {
    nome: 'Maria',
    sobrenome: 'da Silva',
    notas: [7, 10, 8, 5, 7, 9],
}

const { nome, sobrenome, notas } = aluno

const totalBimestres = notas.length

const somarNotas = notas.reduce((acc, curr) => {
    return acc + curr
}, 0)

const media = Math.round(somarNotas / totalBimestres)

console.log(`${nome} ${sobrenome} conseguiu media ${media} em ${totalBimestres} bimestres.`)