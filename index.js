const express = require("express");
require('./db/conn');
const app = express();

const Student = require('./models/students'); 
const port = process.env.PORT || 5000;
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('this works')
})
app.post('/students',(req,res)=>{
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(()=>{
        res.send(user)
    });
}

)
app.listen(port,()=>console.log(`Server is running on port:${port}`));



