const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World2 !');
});

// app.get('/about', (req, res) => {
//   res.send('Hello about !');
// });

// app.get('/contact', (req, res) => {
//   res.send('Hello contact !');
// });

// app.get('/blogs/intro-to-js', (req, res) => {
//     //logic to fetch intro to js from db
//   res.send('Hello intro-to-js !');
// });

//static files to serve
app.use(express.static('public'))

app.get('/blogs/:slug', (req, res) => {
    //logic to fetch {slug} from db
    //for url http://localhost:3000/blogs/avinash?mode=dark&region=in
     console.log(req.params)   //-->will output  { slug: 'avinash' }
     console.log(req.query)    //-->will output  { mode: 'dark', region: 'in' }
  res.send(`hello ${req.params.slug}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});