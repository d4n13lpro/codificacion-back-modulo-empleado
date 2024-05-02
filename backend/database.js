require("dotenv").config();
const { Sequelize } = require("sequelize");

// Configuración de la base de datos
const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  dialect: "mysql",
};

// Crear una nueva instancia de Sequelize
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Conexión a la base de datos establecida con éxito."))
  .catch((error) =>
    console.error("No se pudo conectar a la base de datos:", error)
  );

module.exports = sequelize;
