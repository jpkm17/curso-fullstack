const exp = require('constants')
const express = require('express')
const path = require('path')
const app = express()
//MVC - MODEL(lidar com coisas do banco de dados) VIEW(vizualização, html etc) CONTROLER(responsavel por gerenciar os dados)
//console.log(__dirname)

/*  Definindo os arquivos estaticos  */
// Aqui definimos qual é a pasta dos arquivos estaticos
const staticFolder = path.join(__dirname, 'views')
// Aqui passamos qual é pasta de arquivos estaticos
const expressStatic =  express.static(staticFolder)
app.use(expressStatic)


/*  Definindo os arquivos publicos  */
app.use(express.static(path.join(__dirname, 'public')))
// Maneira comum


//rotas
app.get('/', (req, res)=>{
    res.render('views/index')
})


app.get('/sobre', (req, res)=>{
    res.send('Sobre')
})

// 404 error (not found)
app.use((req, res)=>{ // middleware
    res.send('pagina não encontrada')
})


//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, ()=> console.log(`Server is listen on port ${port}`))