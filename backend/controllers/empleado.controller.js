const EmpleadoService = require("../services/empleado.service");


class EmpleadoController {
  async createEmpleado(req, res) {
    try {
      const empleadoData = req.body;
      const empleado = await EmpleadoService.createEmpleado(empleadoData);
      res.status(201).json(empleado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }
  async getAllEmpleados(req, res) {
    try {
      const empleados = await EmpleadoService.getAllEmpleados();
      res.json(empleados);
    } catch (error) {
      res.status(500).send({
        message: "Error al obtener empleados",
      });
    }
  }
  async getEmpleado(req, res) {
    try {
      const documento_identificacion = req.params.documento_identificacion;
      const empleado = await EmpleadoService.getEmpleado(documento_identificacion);
      if (!empleado) {
        res.status(404).json({ message: "Empleado no encontrado" });
      } else {
        res.json(empleado);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Error al obtener empleado",
      });
    }
  }
  async updateEmpleado(req, res) {
    try {
      const documento_identificacion = req.params.documento_identificacion;
      const empleadoData = req.body;
      const empleado = await EmpleadoService.updateEmpleado(documento_identificacion, empleadoData);
      if (!empleado) {
        res.status(404).json({ message: "Empleado no encontrado" });
      } else {
        res.json(empleado);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Error al actualizar empleado",
      });
    }
  }
  async deleteEmpleado(req, res) {
    try {
      const documento_identificacion = req.params.documento_identificacion;
      const result = await EmpleadoService.deleteEmpleado(documento_identificacion);
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Error al eliminar empleado",
      });
    }
  }
}

module.exports = new EmpleadoController();

  
