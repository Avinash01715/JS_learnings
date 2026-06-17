const fs = require("fs")

// console.log(fs)   ---> prints all the fs module functions

console.log("starting")

//1,2.
// fs.writeFileSync("avi.txt","Hello I am avinash")  ----->sychronous or blocking code

fs.writeFile("avi.txt","Hello I am avinash1", ()=>{     //---->asynchronous or non blocking code
    console.log("done")
    fs.readFile("avi.txt", (error, data)=>{
        console.log(error,data.toString())
    })
})

console.log("ending")


//3.
fs.appendFile("avi.txt"," I am learning",(d)=>{
    console.log(d)
})