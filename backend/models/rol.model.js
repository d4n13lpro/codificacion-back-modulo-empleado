const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Rol extends Model {}

Rol.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: DataTypes.STRING,
  },
  { sequelize, modelName: "roles", timestamps: true }
);

module.exports = Rol;
