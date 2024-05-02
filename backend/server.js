require('dotenv').config();
const express = require('express');
const cors = require('cors');
const empleadoRoutes = require('./routes/empleado.route');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api', empleadoRoutes);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (res.headersSent) {
    return next(err);
  }
  res.status(err.status || 500);
  res.json({ error: err.message });
});

// Iniciar el servidor
const port = process.env.SERVER_PORT || 9000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
