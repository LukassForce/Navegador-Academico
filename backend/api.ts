import { send } from "process";

const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3001;

var connection = mysql.createConnection({

    host    : 'localhost',
    user    : 'root',
    port    : 3306,
    password: '',
    database: 'justificacion'
});

connection.connect(function(error:any){

    if(error){
        console.log('No conectado')
        return;
    }
    console.log('Conectado')
});

app.get('/', (req:any, res:any)=>{

    res.send('Hello World');
})

app.listen(port,()=> {

    console.log(`Escuchando en puerto ${port}`);
})

app.get('/justificacion', (req:any, res:any) =>{

    connection.query('SELECT * FROM justificacion',(req1:any,res1:any) =>{

        if(res1 == null){
            res.send('No existe informacion');
        }
        res.send(res1);
    })

})