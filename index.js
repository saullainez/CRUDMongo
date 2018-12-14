// Importar los módulos
const express = require('express');
const bodyParser = require('body-parser');// Nos permite parsear los request hechos a nuestro servidor
const persona = require('./rutas/persona.rutas'); // Importar las rutas
const app = express(); // Inicialiar la aplicación express


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/personas', persona); // Usamos las rutas

// Configuración de la conexión con la base de datos
const mongoose = require('mongoose');
/*String de conexión con la base de datos creada en mLab.
Este string se compone así: el nombre del usuario de la base de datos y su contraseña,
separados por un ":" y luego la url de la instancia de nuestra base de datos en mLab, seguido
del nombre de la base de datos*/
let dev_db_url = 'mongodb://maestro:Maestro_2018@ds163020.mlab.com:63020/mongocrud';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true },);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
mongoose.set('useFindAndModify', false);
db.on('error', console.error.bind(console, 'Error de conexion con MongoDB:'));

//Iniciar el servidor
app.listen(3000, function(){
    console.log("El servidor está corriendo");
});

