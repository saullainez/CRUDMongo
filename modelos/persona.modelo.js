const mongoose = require('mongoose');// Importamos Mongoose
var timestamps = require('mongoose-timestamp');
/*Mongoose permite definir esquemas para, a partir de estos, crear modelos. El modelo se asigna
a un documento MongoDB a través de la definición del esquema*/ 
const Schema = mongoose.Schema;

// Se define el esquema para el modelo
let PersonaSchema = new Schema({
    nombre: {type: String, required: true, max: 100},
    edad: {type: Number, required: true},
});

PersonaSchema.plugin(timestamps);


// Se exporta el modelo Persona, que está basado en el esquema PersonaSchema
module.exports = mongoose.model('Persona', PersonaSchema);