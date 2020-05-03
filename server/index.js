//Import express
const express = require('express');
const routes = require('./routes');
const path = require('path');

//configurar express
const app = express();

//Habilitar pug
app.set('view engine', 'pug');

//Añadir las vistas
app.set('views', path.join(__dirname, './views'));

//Cargar una carpeta estatica llamada public
app.use(express.static('public'))

app.use('/', routes());

app.listen(3000);