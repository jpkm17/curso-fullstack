/*

PROMISES

promise --> promessa(substitui a maioria das vezes o callback), utilizado em códigos assincronos
ex: vou executar uma função e ela vai me 'prometer' chamar outra função

*/


function exibirNaTela(dados) {
    console.log(dados)
}

function exibirErro() {
    console.log('Ops, deu erro')
}

const botaoCarregar = document.querySelector('#botaoCarregar')


//then -> então
botaoCarregar.onclick = () => {
    fetch('https://jsonplaceholder.typicode.com/photossss', 'GET')
        .then(exibirNaTela)
        .catch(exibirErro)
}



function /*carregarFotos*/ fetch(url, method) {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest()

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status === 200) {
                const response = JSON.parse(this.responseText)

                //tudo certo
                resolve(response)

                if (this.status === 404) {
                    //algum erro
                    reject()
                }
            }
        }

        //substitui o metodo e a url por variaveis o que me permite reutiliza-las
        xhttp.open(method, url, true)
        xhttp.send()
    })
}


/* 
promise -> função que retorna uma promessa, 
dentro da promessa tenho um codigo assincrono, 
quando o codigo for executado com sucesso eu chamo o RESOLVE
e quando der algum tipo de erro eu chamo REJECT, então tenho 
que encadear o then e o catch
*/