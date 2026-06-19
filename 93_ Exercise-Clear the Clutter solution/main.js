//clear the clutter

import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "C:\\Users\\avina\\OneDrive\\Desktop\\JS_learnings-main\\93_ Exercise-Clear the Clutter solution"

let files = await fs.readdir(basepath)


for(const item of files){
    console.log("running for-->", item)

    let ext = item.split(".")[item.split(".").length -1]
    

    if(ext != "js" && ext != "json" && ext != "md" && item.split(".").length > 1){

        if(fsn.existsSync(path.join(basepath, ext))){
            
            //move the file to this directory if it is not a js, json or md
            fs.rename(path.join(basepath,item), path.join(basepath, ext, item))
        }else{
            fs.mkdir(ext)
            fs.rename(path.join(basepath, item), path.join(basepath, ext , item))
        }

    }

}