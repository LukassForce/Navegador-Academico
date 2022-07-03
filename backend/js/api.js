"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config({ path: "../.env" });
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
const bcrypt = require('bcryptjs');
const encrypt = (textPlain) => __awaiter(void 0, void 0, void 0, function* () {
    let hash = yield bcrypt.hash(textPlain, 10);
    return hash;
});
const compare = (passwordPlain, hashPassword) => {
    return bcrypt.compare(passwordPlain, hashPassword);
};
var connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.USER,
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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(port, () => {
    console.log(`Escuchando en puerto ${port}`);
});
app.get('/justificacion', (req, res) => {
    connection.query('SELECT * FROM justificacion', (req1, res1) => {
        if (!res1) {
            res.status(400).send('No existe informacion');
        }
        res.status(200).send(res1);
    });
});
app.delete('/eliminarJustificacion/:id', (req, res) => {
    let id = req.params.id;
    connection.query("DELETE FROM justificacion where id = ?", id, (req1, res1) => {
        res.status(200).send("Eliminado correctamente");
    });
});
app.post('/crearJustificacion', bodyParser.json(), (req, res) => {
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let curso = req.body.curso;
    let asunto = req.body.asunto;
    let mensaje = req.body.mensaje;
    connection.query("INSERT INTO justificacion(nombre, apellido, curso, asunto, mensaje) VALUES('" + nombre + "','" + apellido + "','" + curso + "','" + asunto + "','" + mensaje + "')", (req1, res1) => {
        res.status(201).send(JSON.stringify('Justificacion Creada correctamente'));
    });
});
app.post('/crearUsuario', bodyParser.json(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let rut = req.body.rut;
    let nombre = req.body.nombre;
    let password = req.body.password;
    let apellido = req.body.apellido;
    let curso = req.body.curso;
    let passwordHash = yield encrypt(password);
    connection.query("INSERT INTO usuario (rut, contrasena, Nombre, apellido, curso) VALUES('" + rut + "','" + passwordHash + "','" + nombre + "','" + apellido + "','" + curso + "')", (req1, res1) => {
        res.status(201).send("usuario creado Correctamente");
    });
}));
//obtener usuario por su rut
app.get('/usuario/:rut', (req, res) => {
    let rut = req.params.rut;
    connection.query("SELECT * FROM usuario WHERE rut = ?", rut, (req1, res1) => {
        if (!res1) {
            res.satus(404).send("Usuario no encontrado");
        }
        console.log(res1);
        res.status(200).send(JSON.stringify(res1));
    });
});
