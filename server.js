// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importar el paquete cors
const app = express();
const port = 3001;
 
app.use(cors()); // Usar CORS para permitir solicitudes desde otros dominios
app.use(bodyParser.json());
 
let screenData = [];
 
// Endpoint para recibir la pantalla y devolverla
app.post('/api/save-screen', (req, res) => {
  screenData = req.body.screen;
  console.log('Pantalla guardada:', screenData);
  res.json({ message: 'Pantalla guardada correctamente' });
});
 
// Endpoint para obtener la pantalla
app.get('/api/get-screen', (req, res) => {
  res.json(screenData);
});
 
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});