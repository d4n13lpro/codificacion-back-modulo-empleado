const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Persona extends Model {}

Persona.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    documento_identificacion: { type: DataTypes.STRING, unique: true },
    fecha_nacimiento: DataTypes.DATE,
    correo_electronico: DataTypes.STRING,
    celular: DataTypes.STRING,
    direccion: DataTypes.STRING,
    departamento: DataTypes.STRING,
    ciudad: DataTypes.STRING,
  },
  { sequelize, modelName: "persona", timestamps: true }
);

module.exports = Persona;
