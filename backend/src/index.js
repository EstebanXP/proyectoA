const express = require('express');
const app = express();

//esta es la conexion a la base de datos
require('./database');

app.use(express.json());

app.use('/api',require('./routes/index'));

app.listen(3000);
console.log("Hola mundo",3000);