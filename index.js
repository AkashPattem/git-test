const express = require('express');
const logger = require('./logger');

const app = express();
app.use(logger);

app.get('/',(req,res)=>{
   console.log("it is get request");
   res.send('<p>Hello node app</p>')
})

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("Listening on port",port);
})

let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("I am akash");
    },2000 )
})

promise.catch((err)=>{
    console.log(err);
})