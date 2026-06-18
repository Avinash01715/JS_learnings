const express = require('express');
const app = express()
const port = 3000
const fs = require('fs')
const birds = require('./routes/birds');

// app.use(express.static('public'))



app.use('/birds', birds);

//middleware 1 - logger for our application
app.use((req, res, next) => {
    const time = new Date().toLocaleString();   // ← readable string

    fs.appendFileSync("avi2.txt", `${time} is a ${req.method}\n`);
    console.log(`${time} is a ${req.method}`);

    console.log(req.headers)
    req.avi = " i am good "

    next();
});

//middleware 2
app.use((req,res, next) =>{
    console.log('m2')
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/headers', (req, res) => {
  res.send('Hello World!' + req.avi)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})