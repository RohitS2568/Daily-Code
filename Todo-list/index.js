const express = require('express');
app = express();

app.get('/',async(req,res)=>{
    try {
   const todo = {date:new Date(),
                 title: "jsdhnweh"
   }

    // const saveTodo = await todo.find();

    res.status(200).json(todo);
 
}catch(err){
    res.status(500).json(err)
}
});

app.listen(3000, ()=>{
    console.log("server start");
})