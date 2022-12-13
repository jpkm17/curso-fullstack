/* 
Nõa vou precisar usar o node index.js no terminal para executar o arquivo 
no package.json, na parte de scripts coloquei o *start* que vai executar o 
node index.js, ai eu so coloco *npm start*
*/

const http = require('http')
const fs = require('fs')

// request: o que esta vindo da requisição
// response: reposta que eu vou dar para requisição
const server = http.createServer(function (request, response) {
    // console.log(request.url)

    if (request.url === '/') {
        fs.readFile('../client/index.html', function (error, content) {
            response.end(content)
        })
    }

    if (request.url === '/teste') {
        response.end('ok funcionou')
    }

})

// porta do meu servidor
server.listen(8080)
console.log('Servidor executando na porta 8080, http://127.0.0.1:8080 ')