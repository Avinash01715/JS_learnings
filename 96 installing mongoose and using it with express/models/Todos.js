import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title : "string",
    desc : "string",
    isdone : "boolean"
});

export const Todo = mongoose.model('Todo', TodoSchema);