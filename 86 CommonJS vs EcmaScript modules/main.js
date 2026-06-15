// const { createServer } = require('node:http');
// const fs = require("fs")

// Import the built-in HTTP module in ES Module syntax


// Create an HTTP server
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('Hello, this is an HTTP server using ES Modules!\n');
// });

// // Start the server on port 3000
// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });

// import {a, b} from "./mymodule.js"
// console.log(a,b)

// import obj from "./mymodule.js"
// console.log(obj)

//orimport http from 'http';
// import avi from "./mymodule.js"
// console.log(avi)


//commonjs

const a = require("./mymodule2.js")

console.log(a)


