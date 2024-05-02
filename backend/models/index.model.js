const Persona = require("./persona.model");
const Empleado = require("./empleado.model");
const Rol = require("./rol.model");


Empleado.belongsTo(Rol, { foreignKey: "rol_id" });
// Ajustamos la relación para utilizar la nueva clave externa persona_documento
Empleado.belongsTo(Persona, { foreignKey: "persona_documento", targetKey: "documento_identificacion", as: "persona" });

module.exports = {
  Persona,
  Empleado,
  Rol,
};
