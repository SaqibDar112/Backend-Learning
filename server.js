const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World! from express')
})

app.get('/twitter',(req,res)=>{
    res.send("saqibdar@twitter");
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login here at backend</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send(`<a href="www.youtube.com">Youtube</a>`)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
