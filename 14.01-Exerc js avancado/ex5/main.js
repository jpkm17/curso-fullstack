function mensagem() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('OK, parece que funcionou!')
        }, 10000)
    })
}

mensagem().then(msg => console.log(msg))