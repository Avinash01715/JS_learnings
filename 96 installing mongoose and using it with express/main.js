import mongoose from "mongoose"
import express from "express"
import { Todo } from "./models/Todos.js"

let conn = await mongoose.connect("mongodb://localhost:27017/todos")

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({
        title : "This is the title",
        desc: " this is the description",
        isdone: false
    })
    todo.save()
  res.send('Hello World!')
})

app.get('/a', async (req, res) => {
   const todo = await Todo.findOne({})
  res.json({title: todo.title, desc: todo.desc})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})