// npm i express
const express = require('express')

//express é uma function
const app = express()

const port = process.env.PORT || 8080
app.listen(port, ()=> console.log(`Server is listen on ${port}`))