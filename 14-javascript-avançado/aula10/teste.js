let imagem = document.querySelector('#img')
let content = document.querySelector('#content')
const xhttp = new XMLHttpRequest()

let imgHtml
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status === 200) {
        const response = JSON.parse(this.responseText)
        imagem.src = response[0].url
    }
}

xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)

xhttp.send()