const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleado.controller.js');

// Ruta para crear un empleado
router.post('/empleados', empleadoController.createEmpleado);

// Aquí puedes agregar más rutas según sea necesario, por ejemplo:
router.get('/empleados', empleadoController.getAllEmpleados);

router.get('/empleados/:documento_identificacion', empleadoController.getEmpleado);

// Ruta para actualizar un empleado por su documento de identificación
router.put('/empleados/:documento_identificacion', empleadoController.updateEmpleado);

// Ruta para eliminar un empleado por su documento de identificación
router.delete('/empleados/:documento_identificacion', empleadoController.deleteEmpleado);



module.exports = router;


