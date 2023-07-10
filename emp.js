const express = require('express');
const routeToEmp =  express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host : "localhost",
    user : "Prashant",
    password : "Prashant@1434",
    database : "sdmexam"
})

routeToEmp.get("/",(request,response)=>{
    const statement = `select * from Employee_Tb`
    connection.query(statement,(error,result)=>{
        if(error){
            response.send('error')
        }
        else{
            response.send(result);
        }
    })
})

routeToEmp.post("/",(request,response)=>{
    const statement = `insert into Employee_Tb (e_name,email,password,emp_id,dname,doj) values('${request.body.e_name}', '${request.body.email}', '${request.body.password}', ${request.body.emp_id} , '${request.body.dname}', '${request.body.doj}' )`;
    connection.query(statement,(error,result)=>{
        if(error){
            response.send('error')
        }
        else{
            response.send(result);
        }
    })
})

routeToEmp.delete("/:doj",(request,response)=>{
    const statement = `delete from Employee_Tb where doj = '${request.params.doj}'`;
    connection.query(statement,(error,result)=>{
        if(error){
            response.send('error')
        }
        else{
            response.send(result);
        }
    })
})

routeToEmp.put("/:emp_id",(request,response)=>{
    const statement = `update Employee_Tb set dname = '${request.body.dname}' , doj = '${request.body.doj}' where emp_id = ${request.params.emp_id}`;
    connection.query(statement,(error,result)=>{
        if(error){
            response.send('error')
        }
        else{
            response.send(result);
        }
    })
})

module.exports = routeToEmp;