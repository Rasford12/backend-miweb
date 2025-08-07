// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta principal para recibir el formulario
app.post('/', (req, res) => {
  const { name, email, message } = req.body;

  console.log('📩 Nuevo mensaje recibido:');
  console.log(`Nombre: ${name}`);
  console.log(`Correo: ${email}`);
  console.log(`Mensaje: ${message}`);

  res.send('¡Gracias por tu mensaje!');
});

// Ruta de prueba para comprobar si el servidor está activo
app.get('/', (req, res) => {
  res.send('✅ El servidor está funcionando correctamente.');
});


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
});