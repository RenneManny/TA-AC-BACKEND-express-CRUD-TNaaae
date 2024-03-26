const express = require('express');
const studentsRouter=require('./routes/students')
const path = require('path');
const app=express();
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
// app.set('views',__dirname+"/views");

app.get("/",(req,res)=>{
    res.render('index.ejs');
});
app.use("/students",studentsRouter);
// error 
app.use((req,res,next)=>{
    res.status(404).send("Page not found!");
})
app.listen(3000,()=>{
    console.log('Server is listening at port 3K');
})