const express = require("express");
app = express();
port = 3000;


app.get('/',(req,res)=>{
    res.send("Hello");
})

app.listen(port, ()=>
console.log("http://localhost:3000"));