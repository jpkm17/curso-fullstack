const express = require('express')
const app = express()

// req --> request, res --> response
// Isso é uma rota
app.get('/', (req, res)=>{
    res.send('hello world')
})


app.get('/sobre', (req, res)=>{
    res.send('Sobre')
})

// 404 error (not found)
app.use((req, res)=>{ // middleware
    res.send('pagina não encontrada')
})



const port = process.env.PORT || 8080
app.listen(port, ()=> console.log(`Server is listen on port ${port}`))