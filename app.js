const http = require("http");
const express=require('express');

const app=express();

app.use('/', (req,res,next)=>{
    console.log('This will always run')
   next()
})

app.use('/product', (req,res,next)=>{
    console.log('This is next middleware')
    res.send("<h1>This is product Page</h1>")
    
})

app.use('/', (req,res,next)=>{
    console.log('This is next middleware')
    res.send("<h1>Hello from Express</h1>")
    
})



// const server = http.createServer(app)
// server.listen(3000);

app.listen(3000);
