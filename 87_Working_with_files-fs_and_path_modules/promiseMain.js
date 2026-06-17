import fs from "fs/promises"      // way to handle callback hell

let a = await fs.readFile("avi.txt")

let b = await fs.appendFile("avi.txt"," \n hello")

console.log(a.toString(), b)

