/*

AJAX - 2005 --> é uma tecnica para fazer requisições de um servidor
Asynchronous JavaScript and XML
não é mais utilizada, porem é mais conhecimento


https://jsonplaceholder.typicode.com/  --> API Fake, sistema backend onde eu consigo consultar algumas informações(lorem ipsum das apis)

api --> composta de um endereço onde ela esta hospedada
rotas ou endpoints --> determinado caminho para eu obter um informação

get --> obter
post --> enviar

*/

const xhttp  = new XMLHttpRequest()

xhttp.onreadystatechange = function(){
    //4--> quando o codigo estiver finalizado, status/resposta do servidor for igual a 200(ok, deu tudo certo)
    if(this.readyState == 4 &&  this.status === 200 ){
        const response = JSON.parse(this.responseText)

        console.log(response[0])
    }
}

//1º metodo para fazer a requisição, 2º endereço, 3º assincrono(true) ou sincrono(false)
xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)

xhttp.send()