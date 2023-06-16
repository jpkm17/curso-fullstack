const express = require('express')
const path = require('path')
const app = express()
const fs = require('fs')

//definindo o template engine
app.set('view engine', 'ejs')

//definindo os arquivos estaticos
//app.use(express.static(path.join(__dirname, 'views')))

//definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))


const postsJson = path.join(__dirname, 'posts.json')

//rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: "Digital Tech - Home"
    })
})

app.get('/posts', (req, res) => {
    fs.readFile(postsJson, (err, content) => {
        const postsContent = JSON.parse(content)
        res.render("posts", {
            title: "Digital tech - Posts",
            posts: postsContent
        })
    })

})


//404 error (not found)
app.use((req, res) => {
    res.send('Pagina não encontrada')
})


//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))
console.log('http://localhost:8080/')