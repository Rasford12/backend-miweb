const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/contacto', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Mensaje recibido:', name, email, message);
  res.send('¡Gracias por contactarnos!');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
