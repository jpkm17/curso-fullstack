const express = require('express')
const path = require('path')
const app = express()

// definindo o template engine
app.set('view engine', 'ejs')
// set: configurar,setar

/* 
  definindo os arquivos estaticos
app.use(express.static(path.join(__dirname, 'view')))
 só vou usar isso se eu não usar o template engine
*/

/*  Definindo os arquivos publicos  */
app.use(express.static(path.join(__dirname, 'public')))


//rotas
app.get('/', (req, res)=>{
    res.render('index',{
        title: 'Digital tech - Home',
    })
})


app.get('/posts', (req, res)=>{
    res.render('posts', {
        title: 'Digital Tech - Posts',
        posts: [
                {
                    title: 'Novidade no mundo da tecnologia', 
                    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ab vitae provident voluptate error optio vero! Nostrum, placeat ratione in accusantium doloremque voluptatum est temporibus delectus minima, praesentium, quae vitae.'
                },
                {
                    title: 'Criando um servidor com node.js', 
                    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ab vitae provident voluptate error optio vero! Nostrum, placeat ratione in accusantium doloremque voluptatum est temporibus delectus minima, praesentium, quae vitae.'
                },
                {
                    title: 'Javascript é a linguagem mais utilizada no mundo', 
                    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ab vitae provident voluptate error optio vero! Nostrum, placeat ratione in accusantium doloremque voluptatum est temporibus delectus minima, praesentium, quae vitae.'
                }
        ]
    })
})

// 404 error (not found)
app.use((req, res)=>{ // middleware
    res.send('pagina não encontrada')
})


//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, ()=> console.log(`Server is listen on port ${port}`))