const express = require('express');
const router = express.Router();// Middleware para gestionar las rutas

// Importamos el controlador
const persona_controlador = require('../controladores/persona.controlador');

//CRUD
//Crear
router.post('/crear', persona_controlador.crear_persona);
//Leer
router.get('/:id', persona_controlador.detalles_persona);
//Actualizar
router.put('/:id/actualizar', persona_controlador.actualizar_persona);
//Eliminar
router.delete('/:id/eliminar', persona_controlador.eliminar_persona);

module.exports = router;