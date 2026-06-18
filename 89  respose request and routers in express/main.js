const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
const blog = require('./routes/blog');
app.use('/blog', blog);

const shop = require('./routes/shop');
app.use('/shop', shop);

app
  .get("/", (req, res) => {
    res.send("Hello World!222");
  })
  .post("/", (req, res) => {
    console.log("hey this is a post request"); //chaining of requests
    res.send("Hello world post");
  })
  .put("/", (req, res) => {
    console.log("hey this is a put request"); //put request is used to update
    res.send("Hello world put");
  });

app.get("/index", (req, res) => {
  console.log("hey this is a index file");
  res.sendFile("templates/index.html", { root: __dirname });
});

app.get("/api", (req, res) => {
  console.log("hey this is a api");
  res.json({ a: 1, b: 3, name: ["avi", "rohan"] });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
