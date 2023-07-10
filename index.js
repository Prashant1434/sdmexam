const express = require('express');
const app =  express();
const cors = require('cors');
const RouteToEmp = require('./emp');

app.use(cors('*'));

// app.get("/",(request,response)=>{
//     response.send("Hello From Node Server")
// })

app.use("/emp",RouteToEmp);

app.listen(9998,'0.0.0.0',()=>{
    console.log("Server Started at 9998");
})