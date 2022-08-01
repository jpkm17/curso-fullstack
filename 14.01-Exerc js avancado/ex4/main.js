const alunos = [{
    nome: 'Maria',
    sobrenome: 'da Silva',
    nota: 10,
},
{
    nome: 'José',
    sobrenome: 'Moreira',
    nota: 4,
},
{
    nome: 'Paulo',
    sobrenome: 'Henrique',
    nota: 7,
},
{
    nome: 'Sara',
    sobrenome: 'Souza',
    nota: 5,
},
{
    nome: 'Clara',
    sobrenome: 'Barbosa',
    nota: 9,
},
{
    nome: 'Rodrigo',
    sobrenome: 'Barros',
    nota: 4,
},
{
    nome: 'Renato',
    sobrenome: 'Barros',
    nota: 7,
},

{
    nome: 'Andrea',
    sobrenome: 'Batista',
    nota: 6,
},

{
    nome: 'Carla',
    sobrenome: 'Campos',
    nota: 3,
},
]

const msg = document.querySelector('#msg')
const list = document.querySelector('#list')
const form = document.querySelector('#form')
const input = document.forms['form']['inputNum']

form.onsubmit = formulario => {
    formulario.preventDefault()

    exibirAluno()
}

function exibirAluno() {
    let notaInput = input.value

    let listaAluno = alunos.reduce((acc, curr) => {
        if (notaInput == curr.nota) {
            acc += `
                <li>
                    ${curr.nome} ${curr.sobrenome}, NOTA: ${curr.nota}
                </li>
            `
        }

        return acc
    }, '')

    if (!listaAluno) {
        list.innerHTML = ''
        msg.innerText = 'Nenhum aluno tirou essa nota'
    } else {
        list.innerHTML = listaAluno
        msg.innerText = ''
    }

    document.forms.form.inputNum.value = ''
}