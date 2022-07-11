/*

LOCAL STORAGE

*/

const tarefas = [
    {tarefa: 'estudar js'},
    {tarefa: 'estudar node.js'},
    {tarefa: 'estudar react.js'},
]

const tarefasJson = JSON.stringify(tarefas)

//1º chave(key), valor(value)
localStorage.setItem('tarefas', tarefasJson)


const listaTarefasSalvas = localStorage.getItem('tarefas')

const listaTarefasObj = JSON.parse(listaTarefasSalvas)

console.log(listaTarefasObj)