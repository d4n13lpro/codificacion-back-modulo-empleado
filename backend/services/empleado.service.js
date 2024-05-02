const { Empleado, Persona } = require("../models/index.model");

class EmpleadoService {
  async createEmpleado(empleadoData) {
    try {
      // Primero, creamos la entidad Persona
      const persona = await Persona.create({
        nombres: empleadoData.nombres,
        apellidos: empleadoData.apellidos,
        documento_identificacion: empleadoData.documento_identificacion,
        fecha_nacimiento: empleadoData.fecha_nacimiento,
        correo_electronico: empleadoData.correo_electronico,
        celular: empleadoData.celular,
        direccion: empleadoData.direccion,
        departamento: empleadoData.departamento,
        ciudad: empleadoData.ciudad,
      });

      // Luego, creamos la entidad Empleado
      const empleado = await Empleado.create({
        persona_documento: persona.documento_identificacion,
        profesion: empleadoData.profesion,
        rol_id: empleadoData.rol_id,
        usuario: empleadoData.usuario,
        contrasena: empleadoData.contrasena,
      });

      return empleado;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getAllEmpleados() {
    try {
      const empleados = await Empleado.findAll({
        include: [
          {
            model: Persona,
            as: "persona",
            required: true,            
          },
        ],
      });
      return empleados;
    } catch (error) {
      throw error;
    }
  }
  async getEmpleado(documento_identificacion) {
    try {
      const empleado = await Empleado.findOne({
        include: [
          {
            model: Persona,
            as: "persona",
            where: { documento_identificacion: documento_identificacion },
            required: true,            
          },
        ],
      });
      return empleado;
    } catch (error) {
      throw error;
    }
  }
  async updateEmpleado(documento_identificacion, empleadoData) {
    try {
        // Buscar la persona por el documento de identificación
        const persona = await Persona.findOne({
            where: { documento_identificacion: documento_identificacion }
        });

        // Si no se encuentra la persona, retornar null
        if (!persona) {
            return null;
        }

        // Actualizar los campos de la persona
        persona.nombres = empleadoData.nombres;
        persona.apellidos = empleadoData.apellidos;
        persona.fecha_nacimiento = empleadoData.fecha_nacimiento;
        persona.correo_electronico = empleadoData.correo_electronico;
        persona.celular = empleadoData.celular;
        persona.direccion = empleadoData.direccion;
        persona.departamento = empleadoData.departamento;
        persona.ciudad = empleadoData.ciudad;

        // Guardar los cambios en la base de datos
        await persona.save();

        // Buscar el empleado por el documento de identificación
        const empleado = await Empleado.findOne({
            where: { persona_documento: documento_identificacion },
        });

        // Si no se encuentra el empleado, retornar null
        if (!empleado) {
            return null;
        }

        // Actualizar los campos del empleado
        empleado.profesion = empleadoData.profesion;
        empleado.rol_id = empleadoData.rol_id;
        empleado.contrasena = empleadoData.contrasena;

        // Guardar los cambios en la base de datos
        await empleado.save();

        return empleado;
    } catch (error) {
        throw error;
    }
}
async deleteEmpleado(documento_identificacion) {
  try {
    // Buscar el empleado por el documento de identificación
    const empleado = await Empleado.findOne({
      where: { persona_documento: documento_identificacion },
    });

    // Si no se encuentra el empleado, lanzar un error
    if (!empleado) {
      throw new Error(`Empleado con documento ${documento_identificacion} no encontrado`);
    }

    // Eliminar el empleado de la base de datos
    await empleado.destroy();

    return { message: "Empleado eliminado con éxito" };
  } catch (error) {
    console.error("Error al eliminar empleado:", error);
    throw error;
  }
}



}

module.exports = new EmpleadoService();


 
  // async getEmpleado(documento_identificacion) {
  //   try {
  //     const empleado = await Empleado.findOne({
  //       where: { persona_documento: documento_identificacion },
  //     });
  //     if (!empleado) {
  //       throw new Error(
  //         `Empleado con documento ${documento_identificacion} no encontrado`
  //       );
  //     }
  //     return empleado;
  //   } catch (error) {
  //     console.error("Error al obtener empleado:", error);
  //     throw error;
  //   }
  // }

  // async updateEmpleado(documento_identificacion, empleadoData) {
  //   try {
  //     const empleado = await this.getEmpleado(documento_identificacion);
  //     const updatedEmpleado = await empleado.update(empleadoData);
  //     return updatedEmpleado;
  //   } catch (error) {
  //     console.error("Error al actualizar empleado:", error);
  //     throw error;
  //   }
  // }

  // async deleteEmpleado(documento_identificacion) {
  //   try {
  //     const empleado = await this.getEmpleado(documento_identificacion);
  //     await empleado.destroy();
  //     return { message: "Empleado eliminado con éxito" };
  //   } catch (error) {
  //     console.error("Error al eliminar empleado:", error);
  //     throw error;
  //   }
  // }

