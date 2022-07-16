let content = document.querySelector('#content')
const xhttp = new XMLHttpRequest()
let img = ''    

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status === 200) {
        const response = JSON.parse(this.responseText)

        for (let num = 0; num < 10; num++) {
            img += `
                <img src="${response[num].url}">
            ` 
        }

        content.innerHTML = img
    }
}

xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)

xhttp.send()