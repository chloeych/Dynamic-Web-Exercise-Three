const express = require ("express"); 

const router = express.Router(); 

router.get("/", (req, res) => res.send("Frog Page")); 

module.exports = router; 