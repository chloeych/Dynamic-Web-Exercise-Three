const express = require("express");  //  object

const app = express(); // function 
const port = 4000; // number 

// app.get("/", (req, res) => res.send("Hello World")); // Function being called 

const indexRoute = require("./routes/index.js"); 
const aboutRoute = require("./routes/about.js"); 

// Serve Static Files

app.use("/static", express.static("public")); 

// Routing in Express
// path and callback function
app.use("/", indexRoute); 
app.use("/about", aboutRoute); 

// app:{
//     get: function(path, callback)
// }

app.listen(port, () => console.log('Hello World is Running!')); // function being called

// Routing - identify endpoints that we want to set up 