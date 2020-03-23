const express = require ('express');  //  object

const app = express(); // function 
const port = 4000; // number 

app.get("/", (req, res)=> res.send("Hello World")); // function being called 

// app:{
//     get: function(path, callback)
// }

app.listen(port, ()=> console.log('Hello World is Running!')); // function being called