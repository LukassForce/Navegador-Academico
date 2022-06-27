"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3001;
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'justificacion'
});
connection.connect(function (error) {
    if (error) {
        console.log('No conectado');
        return;
    }
    console.log('Conectado');
});
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(port, () => {
    console.log(`Escuchando en puerto ${port}`);
});
app.get('/justificacion', (req, res) => {
    connection.query('SELECT * FROM justificacion', (req1, res1) => {
        if (res1 == null) {
            res.send('No existe informacion');
        }
        res.send(res1);
    });
});
