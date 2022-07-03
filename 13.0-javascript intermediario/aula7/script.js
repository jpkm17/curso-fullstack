let toast = document.querySelector('.toast')
let tarefa = document.querySelector('#tarefa')
let botaoCadastrar = document.querySelector('#botaoCadastrar')

botaoCadastrar.onclick = function(){
    
    toast.classList.add('visible')
    
    //parametro - callback(nova função) | tempo
    /*setTimeout(function(){
        toast.classList.remove('visible')
        5000)*/
        
    setTimeout(removerToast, 5000)
    function removerToast(){
        toast.classList.remove('visible')
    }
}


//realizar o exercicio