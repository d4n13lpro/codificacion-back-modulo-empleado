const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");
const Persona = require("./persona.model");

class Cliente extends Model {}

Cliente.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    persona_documento: { type: DataTypes.STRING, unique: true },
  },
  { sequelize, modelName: "clientes" }
);

Cliente.belongsTo(Persona, { foreignKey: "persona_documento" });

module.exports = Cliente;
