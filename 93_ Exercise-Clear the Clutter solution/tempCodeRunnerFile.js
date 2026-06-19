//clear the clutter

import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "C:\\Users\\avina\\OneDrive\\Desktop\\JS_learnings-main\\93_ Exercise-Clear the Clutter solution"

let files = await fs.readdir(basepath)
console.log(files)