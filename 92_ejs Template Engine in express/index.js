const express = require('express');
const app = express()
const port = 3000

//set ejs as view engine
app.set('view engine','ejs')


app.get('/', (req, res) => {
    //suppose these two data came form db
    let siteName = "Avinash"
    let search = "Search Now"
    let arr = ["noob",23,89]
  res.render('index', {siteName:siteName,search:search, arr})
})

app.get('/blogpost/:slug', (req, res) => {
    let blogname = "why?"
    let blogcontent = "This is good!"
  res.sendFile("templates/blogpost.html", {root: __dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})