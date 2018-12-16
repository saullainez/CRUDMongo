const Persona = require('../modelos/persona.modelo'); // Importamos el modelo

exports.obtener_todo = function(req, res){
    Persona.find({}).sort({updatedAt: -1}).exec(function(err, personas){
        if (err) return next(err);
        res.json(personas);
    });
    /*Persona.find({}, function(err, personas){
        res.json(personas);
    }).sort('-updatedAt');*/
};

exports.crear_persona = function (req, res) {
    // Se crea una nueva instancia del modelo Persona, siguiendo el esquema que se había definido
    let persona = new Persona(
        {
            nombre: req.body.nombre, // Se accede al body del request y se obtienen el nombre y la edad
            edad: req.body.edad
        }
    );
    // Guardamos
    persona.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json(persona)
    })
};

//Lee una persona, usando el id que se le envía mediante el request
exports.detalles_persona = function (req, res) {
    Persona.findById(req.params.id, function (err, persona) {
        if (err) return next(err);
        res.json(persona);
    })
};

//Utiliza el id que se le envía en el request, para encontrar y actualizar una persona existente
exports.actualizar_persona = function (req, res) {
    Persona.findOneAndUpdate(req.params.id, {$set: req.body}, {new : true}, function (err, persona) {
        if (err) return next(err);
        //res.send('Persona actualizada.');
        res.json(persona);
    });
};

//Utiliza el id que se le envía en el request, para encontrar y eliminar una persona existente
exports.eliminar_persona = function (req, res) {
    Persona.findOneAndDelete(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Eliminada satisfactoriamente');
    })
};