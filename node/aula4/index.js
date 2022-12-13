// o node ja tem alguns modulos prontos e outros que podemos instalar 

const fs = require('fs')
//                             callback
fs.readFile('./clientes.json', function (error, content) {
    if (error) {
        console.log('algo deu errado', error)
    } else {
        console.log(JSON.parse(content))
    }
})

