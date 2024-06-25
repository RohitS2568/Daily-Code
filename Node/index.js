const express = require("express");
app = express();
port = 3000;

app.get("/", (req,res)=>{
    res.send("Hello Rozar");
})

app.listen(port, ()=>{
    console.log("Server Start");
})