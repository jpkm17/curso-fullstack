const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

//definindo o template engine
app.set('view engine', 'ejs')

//definindo os arquivos estaticos
//app.use(express.static(path.join(__dirname, 'views')))

//definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

// habilita server para receber dados via post do (formulario)
app.use(express.urlencoded({extended: true}))

//rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: "Digital Tech - Home"
    })
})


app.get('/posts', (req, res) => {
    fs.readFile('./store/posts.json', (err, content) => {
        const postsContent = JSON.parse(content)
        res.render("posts", {
            title: "Digital tech - Posts",
            posts: postsContent
        })
    })    
})


app.get('/cadastro-posts', (req, res) => {
    console.log(req.query)
    const {c} = req.query
    res.render('cadastro-posts', {
        title: "Digital Tech - Cadastrar Post",
        cadastrado: c
    })
})

app.post('/salvar-post', (req, res)=>{
    const {titulo, texto} = req.body

    const data = fs.readFileSync('./store/posts.json')
    const posts = JSON.parse(data)

    posts.push({
        title: titulo,
        text: texto
    // ou titulo,texto sem o ":"
    })
    const postString = JSON.stringify(posts)
    fs.writeFileSync('./store/posts.json', postString)

    res.redirect("/cadastro-posts?c=1")
})


//404 error (not found)
app.use((req, res) => {
    res.send('Pagina não encontrada')
})


//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))
console.log('http://localhost:8080/')