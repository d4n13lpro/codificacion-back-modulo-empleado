const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");
const Persona = require("./persona.model");
const Rol = require("./rol.model");

class Empleado extends Model {}

Empleado.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    persona_documento: { type: DataTypes.STRING, unique: true },
    profesion: DataTypes.STRING,
    rol_id: { type: DataTypes.INTEGER, references: { model: Rol, key: "id" } },
    usuario: DataTypes.STRING,
    contrasena: DataTypes.STRING,
  },
  { sequelize, modelName: "empleado", timestamps: true }
);


module.exports = Empleado;
