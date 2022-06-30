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
    database: 'navegador'
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
//Obtener justificacion por id;
app.get('/justificacion/:id', (req, res) => {
    connection.query('SELECT * FROM justificacion', (req1, res1) => {
        if (res1 == null) {
            res.send('No existe informacion');
        }
        res.status(200).send(res1);
    });
});
app.post('/crearJustificacion', (req, res) => {
});
//obtener usuario por su id
app.get('/usuario/:nameId', (req, res) => {
    let nameId = req.params.nameid;
    console.log(nameId);
    connection.query("SELECT * FROM usuario WHERE id = ?", nameId, (req1, res1) => {
        res.status(200).send(res1);
    });
});
